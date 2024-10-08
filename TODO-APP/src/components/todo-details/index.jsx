import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";



export default function TodoDetails({todoDetails,openDialog,setOpenDialog,setTodoDetails}){

    return(
        <>
        <Dialog onClose={()=>setOpenDialog(false)}open={openDialog}> 
        {/* onClose property is to when you click outside the dialog it is closed */}
            <DialogTitle>{todoDetails?.todo}</DialogTitle>
            <DialogActions>
                <Button onClick={() =>{
                    setTodoDetails(null);
                    setOpenDialog(false);
                }
                }
                >
                    Close
                </Button>
            </DialogActions>

        </Dialog>
        
        </>
    )
}