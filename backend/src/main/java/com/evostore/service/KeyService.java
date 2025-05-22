package com.evostore.service;

import com.evostore.model.Key;
import com.evostore.repository.KeyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class KeyService {

    private final KeyRepository keyRepository;

    // Create a new key
    @Transactional
    public Key createKey(Key key) {
        return keyRepository.save(key);
    }

    // Get all keys
    @Transactional(readOnly = true)
    public List<Key> getAllKeys() {
        return keyRepository.findAll();
    }

    // Get key by ID
    @Transactional(readOnly = true)
    public Key getKeyById(Long id) {
        return keyRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Key not found with id: " + id));
    }

    // Delete key
    @Transactional
    public void deleteKey(Long id) {
        if (!keyRepository.existsById(id)) {
            throw new EntityNotFoundException("Key not found with id: " + id);
        }
        keyRepository.deleteById(id);
    }
}