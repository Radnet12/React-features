// Core
import React, {useState, useEffect} from 'react';

// Instruments
import './styles.css';
import { api } from '../api';
import { delay } from '../instruments';
import { useDebounce } from './useDebounce';

export const Search = () => {
    const [ filter, setFilter ] = useState('');
    const [ countries, setCountries ] = useState([]);
    const [ isFetching, setIsFetching ] = useState(false);

    const getCountries = async () => {
        try {
            setIsFetching(true);
            const filteredCountries = await api.getCountries(filter.trim(), 5);

            await delay(200);
            setCountries(filteredCountries);
        } catch (error) {
            console.log(error);
        } finally {
            setIsFetching(false);
        }
    };
    const debouncedFilter = useDebounce(filter, 1000);
    useEffect(() => getCountries(), [ debouncedFilter ]);

    const regexp = new RegExp(filter, 'g');

    const countriesJSX = countries.map((country) => {
        const name = country.name.replace(regexp,
            `<span class="highlight">${filter}</span>`);
        console.log(name);

        const continent = country.continent.replace(regexp,
            `<span class="highlight">${filter}</span>`);

        return (
            <li
                key = { country.emoji }>
                <span
                    className = 'country'
                    dangerouslySetInnerHTML = {{
                        __html: `${name} ${continent}`,
                    }}
                />
                <span className = 'flag'>{country.emoji}</span>
            </li>
        );
    });


    return (
        <section className = 'strange-search'>
            <span className = 'strange'>Странный</span>
            <input
                placeholder = 'Добро пожаловать!'
                style = {{
                    '--inputBorderStyle': isFetching ? 'dashed' : 'solid',
                }}
                type = 'text'
                value = { filter }
                onChange = { (event) => setFilter(event.target.value) }
            />
            <span className = 'search'>поиск</span>
            <ul>
                {
                    countriesJSX
                }
            </ul>
            <b />
        </section>
    );
};
