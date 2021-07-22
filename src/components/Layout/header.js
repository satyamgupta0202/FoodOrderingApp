import React , {Fragment} from 'react'
import classes from './Header.module.css'
import mealImage from './../../assests/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
const Header = (props)=>{
    return(
        <Fragment>
            <div>
                <header className={classes.header}>
                    <h1>React Meals</h1>
                   <HeaderCartButton/>
                </header>
            </div>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="Meals Table"/>
            </div>
        </Fragment>
    )
}
export default Header;