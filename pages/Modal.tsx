import React from 'react';
import type { PlayerMeta } from '.';

interface ModalProps {
  open: Boolean;
  selectedPlayer?: PlayerMeta;
  onClose: any; // TODO fix
}

export default function Modal({ open, selectedPlayer, onClose }: ModalProps) {
  const modalStyles = {
    
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '150px',
    backgroundColor: 'white'
    
  } as any; //TODO fix

  const overlayStyle = {

    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000,
  } as any; //TODO fix

  if (!open) {
    return null;
  }
  return (
    <div style={overlayStyle}>
      <div style={modalStyles}>
        Player: {selectedPlayer?.first_name} {selectedPlayer?.last_name}
        {selectedPlayer?.height_feet && (
          <div>
            Height: {selectedPlayer.height_feet}ft{' '}
            {selectedPlayer.height_inches}"
          </div>
        )}
        {selectedPlayer?.position && (
          <div>Position: {selectedPlayer.position}</div>
        )}
        {selectedPlayer?.team.full_name && (
          <div>Current/Last Team: {selectedPlayer.team.full_name}</div>
        )}
        <div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
