import React from "react";
import { database } from "../../firebase";
import { ref, set, get, update, remove, child} from 'firebase/database';

class Crud extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            db:'',
            client: '',
            subject: '',
            agent: '',
            priority: '',
            status: '',
            create: '',
            due: ''
        }
    }

    componentDidMount(){
        this.setState({
            db: database
        });
    }

    render(){
        return(
            <>
                
            </>
        )
    }
}