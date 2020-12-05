import { useState, useEffect } from 'react';
import useMeta from '../LogicComponents/useMeta';

export const Data = () => {

    const [chartData, setChartData] = useState();
    const { metaData, loading } = useMeta()
    useEffect(() => {
        setChartData(metaData)
    }, [metaData, loading])
    return { chartData, loading };
}