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
    backgroundColor: '#808080',
  } as any; //TODO fix

  if (!open) {
    return null;
  }
  return (
    <div style={modalStyles}>
      Player: {selectedPlayer?.first_name} {selectedPlayer?.last_name}
      {selectedPlayer?.height_feet && (
        <div>
          height: {selectedPlayer.height_feet}ft {selectedPlayer.height_inches}"
        </div>
      )}
      {selectedPlayer?.position && (
        <div>position: {selectedPlayer.position}</div>
      )}
      {selectedPlayer?.team.full_name && (
        <div>Team: {selectedPlayer.team.full_name}</div>
      )}
      <div>
        <button onClick={onClose}>close modal</button>
      </div>
    </div>
  );
}
