import {FaRegTimesCircle} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice';
 
const GoalItem = ({goal}) => {
    const dispatch = useDispatch()

    return (
        <div className="goal">
            <div>
                {new Date(goal.createdAt).toLocaleString('uk-UA')}
            </div>
            <h2>{goal.text}</h2>
            <button 
                className="close"
                onClick={() => dispatch(deleteGoal(goal._id))}
            >
                <FaRegTimesCircle />
            </button>
        </div>
    );
};

export default GoalItem;