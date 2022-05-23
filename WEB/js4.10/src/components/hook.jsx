import React, {useState} from "react";

const Hook = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>
                You pressed {count} times
            </p>

            <button onClick={() => setCount(count + 1)}>
                Press me
            </button>
        </div>
    );

}

export default Hook