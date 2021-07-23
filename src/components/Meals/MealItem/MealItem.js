import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
const MealItem = (props)=>{
    let price = `$${props.price}`;
    return(
        <li className={classes.meal}>
            <div>
                <h1>{props.name}</h1>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm/>
            </div>
        </li>
    )
}
export default MealItem;