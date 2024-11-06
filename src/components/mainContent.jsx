import React from 'react';
import '../styles/mainContent.scss';

const MainContent = ({ showMenu }) => {
    return (
        <main className={`main-content ${showMenu ? 'shrink' : 'expand'}`}>
            
        </main>
    );
};

export default MainContent;
