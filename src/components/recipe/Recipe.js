import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Recipe.css'

class Recipe extends Component {
  static propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    instructions: PropTypes.string
  }

  static defaultProps = {
    img: 'http://placekitten.com/200/287',
    title: 'Food',
    ingredients: [],
    instructions: ''
  }

  render() {
    const { title, img, instructions } = this.props
    const ingredients = this.props.ingredients.map((ing, idx) => (
      <li key={idx}>{ing}</li>
    ))

    return (
      <div className="recipe-card">
        <div className="recipe-card-img">
          <img src={img} alt={title} />
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-title">{title}</h3>
          <h4>Ingredients:</h4>
          <ul>
            {ingredients}
          </ul>
          <h4>Instructions:</h4>
          <p>{instructions}</p>
        </div>
      </div>
    )
  }
}

export default Recipe
