import { Dialog , DialogContent} from '@mui/material';


export function ConfirmReset ({ resetGame, onResetGame , onClose}) {
  if (resetGame === null) return null
  return (
    <Dialog 
      open={resetGame} 
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
                    <h3 style={{color: 'white'}}>¿Estás seguro de que quieres reiniciar el juego?</h3>
                </div>
                <button className="winner-button" onClick={() => onResetGame(true)}>Aceptar</button>
            </section>
        </DialogContent>
    </Dialog>
  )
}
