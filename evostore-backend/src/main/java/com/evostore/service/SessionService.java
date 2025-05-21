package com.evostore.service;

import com.evostore.model.Key;
import com.evostore.model.Session;
import com.evostore.repository.KeyRepository;
import com.evostore.repository.SessionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SessionService {

    private final SessionRepository sessionRepository;
    private final KeyRepository keyRepository;

    // Create a new session for a key
    @Transactional
    public Session createSession(Session session, Long keyId) {
        Key key = keyRepository.findById(keyId)
                .orElseThrow(() -> new EntityNotFoundException("Key not found with id: " + keyId));
        
        session.setKey(key);
        return sessionRepository.save(session);
    }

    // Get all sessions for a specific key
    @Transactional(readOnly = true)
    public List<Session> getSessionsByKeyId(Long keyId) {
        if (!keyRepository.existsById(keyId)) {
            throw new EntityNotFoundException("Key not found with id: " + keyId);
        }
        return sessionRepository.findByKeyId(keyId);
    }

    // Get a specific session by ID
    @Transactional(readOnly = true)
    public Session getSessionById(Long id) {
        return sessionRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Session not found with id: " + id));
    }
}