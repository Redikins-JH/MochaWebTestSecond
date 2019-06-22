import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customer = [
{
  'id': 1,
  'image' : 'https://placeimg.com/256/256/any',
  'name' : '정종학',
  'birthday' : '891102',
  'gender' : '남자',
  'job' : 'nop',
},
{
  'id': 2,
  'image' : 'https://placeimg.com/256/256/any',
  'name' : '뉴원',
  'birthday' : '891102',
  'gender' : '남자',
  'job' : 'nop',
},
{
  'id': 3,
  'image' : 'https://placeimg.com/256/256/any',
  'name' : '뉴뉴원',
  'birthday' : '891102',
  'gender' : '남자',
  'job' : 'nop',
}
]

function App() {
  return (
    <div>
      {
        customer.map(c => { return ( 
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )

        })
      }
    </div>
  )
}

export default App;
