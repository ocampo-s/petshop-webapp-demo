import React from 'react'
import StartFirebase from '../components/firebaseConfig/index'
import { ref, set, get, update, remove, child } from "firebase/database"
import '../components/styles/Forms.css'

export class Addprod extends React.Component{
    
    

    constructor(props){
        super(props);
        this.state = {
            db:'',
            title:'',
            description:'',
            animal:'',
            price:''
        }
        this.interface = this.interface.bind(this);
    }


    
    componentDidMount(){
        this.setState({
            db: StartFirebase()
        });
    }

    render(){
        
        
        return(
            <>
                <div className='container'>
                    <h1>ADD A PRODUCT</h1>
                        <form>
                            <div className='form-item'>
                                <input type='text' id='titlebox' value={this.state.title} onChange={e =>{this.setState({title: e.target.value})}} placeholder="ENTER PRODUCT NAME"/>
                            </div>
                            <div className='form-item'>
                                
                                <input type='text' id='descriptionbox' value={this.state.description} onChange={e =>{this.setState({description: e.target.value})}} placeholder="ENTER PRODUCT DESCRIPTION"/>
                            </div>
                            <div className='form-item'>
                                <select>
                                    <option>CHOOSE AN ANIMAL</option>
                                    <option>dog</option>
                                    <option>cat</option>
                                    <option>other animal</option>
                                </select>
                                <input type='text' id='animalbox' value={this.state.animal} onChange={e =>{this.setState({animal: e.target.value})}} placeholder="CHOOSE DOG, CAT OR OTHER"/>
                            </div>
                            <div className='form-item'>
                                <input type='number' id='pricebox' value={this.state.price} onChange={e =>{this.setState({price: e.target.value})}} placeholder="ENTER PRICE AS 00.00"/>
                            </div>
                        </form>
                        <div className='form-btns'>
                            <button className='btn' id='addBtn' onClick={this.interface}>ADD</button>
                            <button className='btn' id='updateBtn' onClick={this.interface}>UPDATE</button>
                            <button className='btn' id='deleteBtn' onClick={this.interface}>DELETE</button>
                            <button className='btn' id='selectBtn' onClick={this.interface}>GET PRODUCT</button>
                        </div>
                </div>   
            </>
        )
    }

    interface(event){
        const id = event.target.id;
        if(id === 'addBtn'){
            this.insertData();
        }

        else if(id === 'updateBtn'){
           this.updateData();
        }

        else if(id === 'deleteBtn'){
           this.deleteData();
        }

        else if(id === 'selectBtn'){
           this.selectData();
        }
    }
    
    getAllInputs(){
        return {
            title: this.state.title,
            description: this.state.description,
            animal: this.state.animal,
            price: Number(this.state.price)
        }
    }


    insertData(){
        const db = this.state.db;
        const data = this.getAllInputs();

        set(ref(db, 'Product/'+ data.title),
        {
            description: data.description,
            animal: data.animal,
            price: data.price
        })
        .then(() => {alert('Product was added successfully')})
        .catch((error) => {alert("there was an error, details: " + error)});
    }

    updateData(){
        const db = this.state.db;
        const data = this.getAllInputs();

        update(ref(db, 'Product/'+ data.title),
        {
            description: data.description,
            animal: data.animal,
            price: data.price
        })
        .then(() => {alert('Product was updated successfully')})
        .catch((error) => {alert("there was an error, details: " + error)});
    }

    deleteData(){
        const db = this.state.db;
        const title = this.getAllInputs().title;

        remove(ref(db, 'Product/'+ title))
        .then(() => {alert('Product was deleted successfully')})
        .catch((error) => {alert("there was an error, details: " + error)});
    }

    selectData(){
        const dbref = ref(this.state.db);
        const title = this.getAllInputs().title;

        get(child(dbref, 'Product/' + title)).then((snapshot) => {
            if(snapshot.exists()){
                this.setState({
                    description: snapshot.val().description,
                    animal: snapshot.val().animal,
                    price: snapshot.val().price
                })
            }

            else {
                alert("No data found.");
            }
        })
        .catch((error) => {alert("There was an error, details: " + error)});
    }

}