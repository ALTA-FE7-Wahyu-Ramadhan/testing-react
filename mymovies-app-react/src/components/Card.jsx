import React, { Component } from 'react'
import Button from './Button';
import {Link} from 'react-router-dom';

export class Card extends Component {
  render() {
    return (
      <div className='flex flex-col justify-between p3 bg-zinc-500 rounded shadow-lg shadow-black'>
        <Link to={this.props.navigate}>
        <img src={this.props.image ?`https://image.tmdb.org/t/p/w500/${this.props.image}`:'https://via.placeholder.com/500x750.png/000000/FFFFFF/%20C/O%20https://placeholder.com/?text=No+image' } alt={this.props.title} height='750' />
        <p className='text-center text-white font-bold'>{this.props.title}</p>
        </Link>
        <Button label='Add to Favorite' onClick={this.props.onClick}/>
      </div>
    )
  }
}

/*
ada 2 macam export:
1. export default: berarti gak usah ditulis lagi export di bawahnya
2. named export: di bagian atas di tulis dengan bentuk
  class Card extends Component {

  dan bagian bawah baru di ekspor
  export { Card, Card2 };
*/

export default Card