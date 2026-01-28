import { Dialog , DialogContent, DialogContentText} from '@mui/material';
import React from 'react'
import confetti from 'canvas-confetti'


export function WinnerModal ({ winner, open, onClose }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : `Ganó: ${winner == 'white' ? 'Blancas' : 'Negras'}`;
  if(!open) return null;
  confetti();
  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm"
      PaperProps={{
        sx: {
          backgroundColor: '#1a1a1a',
          backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.7)',
          border: '2px solid #444',
          minWidth: '400px',
        }
      }}
      BackdropProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }
      }}
    >
        <DialogContent>
            <section className='winner'>
                <div className='text'>
                    <h3 style={{color: 'white'}}>{winnerText}</h3>
                </div>
                <button className="winner-button" onClick={() => onClose()}>Aceptar</button>
            </section>
        </DialogContent>
    </Dialog>
  )
}
