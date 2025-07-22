
import React from 'react';

interface LinkedInConnectionsProps {
    jobTitle: string;
    companyName: string;
}

const LinkedInConnections: React.FC<LinkedInConnectionsProps> = ({ jobTitle, companyName }) => {
    if (!jobTitle && !companyName) return null;
    const searchUrl = `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(
        jobTitle + (companyName ? ' at ' + companyName : '')
    )}`;
    return (
        <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Find Relevant LinkedIn Connections</h2>
            <button
                onClick={() => window.open(searchUrl, '_blank', 'noopener,noreferrer')}
                className="primary-button px-2"
            >
                Connect
            </button>
        </div>
    );
};

export default LinkedInConnections; 