import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1641970304213-fadcccae478e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3QlMjBzdG9ybXxlbnwwfHwwfHx8MA%3D%3D";

    let HOT_URL = "https://images.unsplash.com/photo-1648220073452-648960ffec43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1bm55JTIwY2l0eSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1508697014387-db70aad34f4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia 
                        sx={{ height: 140 }} 
                        image={
                            info.humidity > 80 
                                ? RAIN_URL 
                                : info.temp > 15 
                                ? HOT_URL 
                                : COLD_URL}  
                        title="green iguana"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{" "}
                            {info.humidity > 80 ? (
                                <ThunderstormIcon /> 
                            ) : info.temp > 15 ? (
                                <WbSunnyIcon /> 
                            ) : (
                                <AcUnitIcon />
                            )}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>Feels Like = {info.feelsLike}&deg;C</p>
                            <p>Weather = {info.weather}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}