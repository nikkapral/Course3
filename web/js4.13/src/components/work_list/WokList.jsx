import menuList from "../menu/menuList";

import React, {useState} from "react";

import styles from './WorkList.module.scss'

const WorkList = () => {
    const [menuItem, setMenuItem] = useState();
    const [toDO, setToDO] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div id={styles.workList}>
            <form onSubmit={handleSubmit}>
                <p>Set the title</p>
                <input id={'age_input'} type="number" size="3" min="1" max="100" value={menuItem}
                       onChange={(e) => setMenuItem(e.target.value)}
                />

                <p>What you want to do?</p>
                <input id = {'to_do_input'} type="text" value={toDO}
                       onChange={(e) => setToDO(e.target.value)}
                />

                <button type={"submit"}>
                    Submit
                </button>
            </form>



        </div>
    );
}

export default WorkList;