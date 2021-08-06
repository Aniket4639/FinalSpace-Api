import { Box } from '@material-ui/core';
import React, { Component } from 'react'
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/paper";
import Grid from "@material-ui/core/Grid";
import {Button, TextField}  from '@material-ui/core';
class FinalSpace extends Component {
    constructor(props){
        super(props)
        this.state={
            news:[],
            array:[]
        }
    }
        
    async componentDidMount(){
        const url='https://finalspaceapi.com/api/v0/character/';
        const res=await fetch(url);
        const news=await res.json();
        
        console.log(news);
        this.setState({news: news})
    }
    render() {
      const {news}=this.state;
    
     return (
      <div >
      {this.state.news.map(news => 
                 
                     <Grid  container spacing={2}>
                      <Grid item sm={4}>
                         <Paper>
                             <Box p={1} boxShadow={10} textAlign="center">
                                  <Typography variant="subtitle1" variant="h5">
                                   <b>{news.name}</b>
                                  </Typography>
                                     <img src={news.img_url} width={350}/>
                                    <div> Gender: {news.gender} </div>
                             </Box>
                          </Paper>
                      </Grid>
                     </Grid>
                  )
      }
      </div>
      );
    }
}
export default FinalSpace