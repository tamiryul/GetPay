///// מגדיר את החיבור למסדי הנתונים ומכיל את הפרוויידר שהם פעולות ה-GET+ ADD
import React,{Component} from 'react';
import axios from 'axios';


const Context = React.createContext()

export class Provider extends Component {

    api = axios.create({
        baseURL : 'http://localhost:4444/api/profiles',
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/text/plain'
        }
    });

    apiProducts = axios.create({
        baseURL : 'http://localhost:4444/NewInvoice/apiProducts/products',
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/x-www-form-urlencoded'
        }
    });

    apiDebts = axios.create({
        baseURL : 'http://localhost:4444/main/apiDebts/debts',
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/x-www-form-urlencoded'
        }
    });

    state = {
        profiles:[{}],
        products:[{}],
        debts:[{}]
    };

    getProfiles = () => {
        this.api.get('/')
        .then(res => {this.setState({profiles:res.data})
    })}

    getProducts = () => {
        this.apiProducts.get('/')
        .then(res => {this.setState({products:res.data})
    })}

    getDebts = () => {
        this.apiDebts.get('/')
        .then(res => {this.setState({debts:res.data})
    })}

   
/////append - a process that involves adding new data elements to an existing database
    addProfile = profile => {
        const payload = new URLSearchParams();/////בונה אובייקט שאני רוצה לשלוח כמו טופס
        payload.append('profilename', profile.profilename)
        payload.append('contactname', profile.contactname)
        payload.append('email', profile.email)
        payload.append('phone', profile.phone)
        payload.append('address', profile.address)

        // const payload = URLSearchParams({profilename: profile.profilename, contactname: profile.contactname, email: profile.email, phone: profile.phone, address: profile.address });
        
        this.api.post('/', payload)
            .then(res => {this.setState({profiles:res.data});
            })
    }

    render() {
        return (
            <Context.Provider value={{
                profiles: this.state.profiles,
                products: this.state.products,
                debts: this.state.debts,

                actions:{
                    getProfiles: this.getProfiles,
                    addProfile: this.addProfile,
                    getProducts: this.getProducts,
                    getDebts: this.getDebts
                },
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;