import React, {useState} from "react";

const TestHook = () => {
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('Banana');
    const [todos, setTodos] = useState('Learn hooks');

    const handleSubmit = (e) => {
        e.preventDefault();
        setAge(0)
        setFruit("")
        setTodos("")

    }

    return (
        <div id={'testhook'}>
            <p>The age: {age}</p>
            <p>The fruit: {fruit}</p>
            <p>What to do: {todos}</p>

            <form onSubmit={handleSubmit}>
                <p>Set new age</p>
                <input id={'age_input'} type="number" size="3" min="1" max="100" value={age}
                       onChange={(e) => setAge(e.target.value)}
                />

                <p>Set new fruit</p>
                <input id = {'fruit_input'} type="text" value={fruit}
                       onChange={(e) => setFruit(e.target.value)}
                />

                <p>Set new goal</p>
                <textarea id={'todos_input'} cols="70" rows="10" type="text" value={todos}
                          onChange={(e) => setTodos(e.target.value)}
                />

                <button type={"submit"}>
                    Clear
                </button>
            </form>



        </div>
    );
}

export default TestHook;