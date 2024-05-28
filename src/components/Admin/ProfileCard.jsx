import { useEffect } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { connect } from "react-redux";
import { fetchProfileCardRequest } from "../../actions/LearnersViewAction";
import { useParams } from 'react-router-dom';
import user from '../../assets/Images/user.png';
const ProfileCard = ({ fetchProfileCard, profilecard }) => {
    const learnerid = useParams();
    useEffect(() => {
        fetchProfileCard(learnerid);
    }, [fetchProfileCard]);
    if (profilecard.profilecard.learnerprofile === "http://localhost:5199/wwwroot/LearnerProfileImages/") {
        return (
            <>
                <Grid item xs={9}>
                    <Card sx={{ display: 'flex', height: 200 }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151, }}
                            image={user}
                            alt="Profile"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography variant="h4" color="text.secondary" component="div">
                                    <span style={{ fontWeight: 'bold', color: '#23275c' }}>{profilecard.profilecard.learnerFirstName} {profilecard.profilecard.learnerLastName} </span>
                                    <span style={{ fontStyle: 'italic', fontWeight: 'lighter', fontSize: '15px' }}>({profilecard.profilecard.learnerStream})</span>
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    <span style={{ fontWeight: 'bold', color: 'black' }}>Email : </span> <span style={{ fontStyle: 'italic' }}>{profilecard.profilecard.learnerEmail}</span>
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    <span style={{ fontWeight: 'bold', color: 'black' }}>DOB : </span><span style={{ fontStyle: 'italic' }}>{profilecard.profilecard.learnerDob}</span>
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    <span style={{ fontWeight: 'bold', color: 'black' }}>Contact Number : </span> <span style={{ fontStyle: 'italic' }}>{profilecard.profilecard.learnerContactNumber}</span>
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    <span style={{ fontWeight: 'bold', color: 'black' }}>Gender : </span> <span style={{ fontStyle: 'italic', textTransform: 'capitalize' }}>{profilecard.profilecard.learnerGender}</span>
                                    <span style={{ fontWeight: 'bold', color: 'black', marginLeft: '20em' }}> Last Login : </span> <span style={{ fontStyle: 'italic', color: 'red' }}>{profilecard.profilecard.learnerLastlogin}</span>
                                </Typography>
                            </CardContent>

                        </Box>
                    </Card>
                </Grid>

            </>
        )
    }
    else {
        return (
            <>
                <Grid item xs={9}>
                    <Card sx={{ display: 'flex', height: 200 }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151, }}
                            image={profilecard.profilecard.learnerprofile}
                            alt="Profile"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography variant="h4" color="text.secondary" component="div">
                                    <span style={{ fontWeight: 'bold', color: '#23275c' }}>{profilecard.profilecard.learnerFirstName} {profilecard.profilecard.learnerLastName} </span>
                                    <span style={{ fontStyle: 'italic', fontWeight: 'lighter', fontSize: '15px' }}>({profilecard.profilecard.learnerStream})</span>
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    <span style={{ fontWeight: 'bold', color: 'black' }}>Email : </span> <span style={{ fontStyle: 'italic' }}>{profilecard.profilecard.learnerEmail}</span>
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    <span style={{ fontWeight: 'bold', color: 'black' }}>DOB : </span><span style={{ fontStyle: 'italic' }}>{profilecard.profilecard.learnerDob}</span>
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    <span style={{ fontWeight: 'bold', color: 'black' }}>Contact Number : </span> <span style={{ fontStyle: 'italic' }}>{profilecard.profilecard.learnerContactNumber}</span>
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    <span style={{ fontWeight: 'bold', color: 'black' }}>Gender : </span> <span style={{ fontStyle: 'italic', textTransform: 'capitalize' }}>{profilecard.profilecard.learnerGender}</span>
                                    <span style={{ fontWeight: 'bold', color: 'black', marginLeft: '20em' }}> Last Login : </span> <span style={{ fontStyle: 'italic', color: 'red' }}>{profilecard.profilecard.learnerLastlogin}</span>
                                </Typography>
                            </CardContent>

                        </Box>
                    </Card>
                </Grid>

            </>
        )

    }
};

const mapStoreToProps = (state) => ({
    profilecard: state.profilecard,
});

const mapDispatchToProps = (dispatch) => ({
    fetchProfileCard: (learnerid) => dispatch(fetchProfileCardRequest(learnerid))
})


export default connect(mapStoreToProps, mapDispatchToProps)(ProfileCard);