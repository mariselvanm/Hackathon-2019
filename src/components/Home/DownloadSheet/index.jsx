import React, { useState } from 'react';
import OpenChart from '../OpenChart';
import './style.scss';

function DownloadSheetComponent() {
    const [openChart, setOpenChart] = useState(false);

    const openChartView = () => {
        setOpenChart(!openChart);
    }

    return(
        <div className="download-container">
            <button className="chart-open">View In Charts</button>
            <button className="chart-open" onClick={openChartView}>View In Charts</button>
            <div className={"chartViewContainer " + (openChart? "show": "hide")}>
                <OpenChart />
            </div>
        </div>
    );
}

export default DownloadSheetComponent;