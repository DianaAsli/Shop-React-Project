import { useState, useEffect } from "react"

export default function SubcategoryFilter({ filters, onFilterChange }) {
    const [showFilter, setShowFilter] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterChange = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;

        setSelectedFilters(selected => checked ? [...selected, value] : selected.filter(filter => filter !== value));
    }

    useEffect(() => {
        onFilterChange(selectedFilters);
    }, [selectedFilters, onFilterChange]);

    return (
        <div className="min-w-60">
            <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTER</p>
            <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                    {filters.map(filter => (
                        <p key={filter} className="flex gap-2">
                            <input onChange={handleFilterChange} className="w-3" type="checkbox" value={filter} />{filter}
                        </p>
                    ))}
                </div>
            </div>
        </div>

    )
}
