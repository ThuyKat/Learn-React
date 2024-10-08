import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";



export default function TodoItem({todo,fetchDetailsOfCurrentTodo}){
    console.log(todo);
    return (
        <Card sx={{
            maxWidth: 350,
            display: "flex",
            flexDirection: "column",
            justifyContent:"space-between",

        }}>
            <CardContent>
                <Typography varian="h5" color={"text.secondary"}>{todo?.todo}</Typography>
            </CardContent>
            <CardActions>
                <Button sx={{
                    backgroundColor: '#000000',
                    color: '#fff',
                    opacity: 0.75,
                    "&:hover":{
                        backgroundColor: '#000000',
                        color: '#fff',
                        opacity: 1,
                    }

                }} onClick={()=>fetchDetailsOfCurrentTodo(todo?.id)}>
                    Show Details
                </Button>
            </CardActions>
        </Card>
    );
}