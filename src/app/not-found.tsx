import Link from 'next/link';
import React from 'react';

export default function NotFound() {
    return (
        <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>404 - Page Not Found</h1>
            <p style={{ marginBottom: '2rem', color: '#666' }}>
                The page or product you are looking for could not be found.
            </p>
            <Link href="/" style={{
                display: 'inline-block',
                padding: '0.6rem 1.2rem',
                backgroundColor: 'var(--primary)',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '5px',
                fontWeight: 'bold',
                fontSize: '1rem',
                transition: 'background 0.3s ease'
            }}>
                Return to Home
            </Link>
        </div>
    );
}
