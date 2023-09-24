import React, { useState, useEffect } from 'react';

function UseCaseLiveFilter() {

    const array = [
        { key: 1, type: 'regular', value: 'Alex' },
        { key: 2, type: 'regular', value: 'Bob' },
        { key: 3, type: 'silver', value: 'Catty' },
        { key: 4, type: 'silver', value: 'Devid' },
        { key: 5, type: 'silver', value: 'Elka' },
        { key: 6, type: 'golden', value: 'Florina' },
        { key: 7, type: 'golden', value: 'Glen' },
        { key: 8, type: 'golden', value: 'Honey' },
    ]

    const [input, setInput] = useState('');
    const [inputType, setInputType] = useState('');
    const [filteredArray, setFilteredArray] = useState(array);

    useEffect(() => {
        setFilteredArray(() => {
            const newArray = 
            array.filter(item => item.value.includes(input))
            .filter(item=>item.type.includes(inputType))

            return newArray;
        })
    }, [input,inputType])
    return (<div>

        <table>
            <thead>
                <tr><th>ID</th><th>Type</th><th>Value</th></tr>
            </thead>
            <tbody>
                {
                    filteredArray.map(item => {
                        return (<tr key={item.key}>
                            <td>{item.key}</td>
                            <td>{item.type}</td>
                            <td>{item.value}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>

        <form>
            <div>
                <label>Filter By Value</label>
                <input type='text' value={input} placeholder='Enter Input'
                    onChange={(e) => setInput(e.target.value)} />
            </div>
            <div>
                <label>Filter By type</label>
                <input type='text' value={inputType} placeholder='Enter Input Type'
                    onChange={(e) => setInputType(e.target.value)} />
            </div>
        </form>
    </div>);

}

export default UseCaseLiveFilter;