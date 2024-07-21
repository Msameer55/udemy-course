import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();

  return (
    <footer className='footer-container'>
        <div className="inner-container">
            <div className="footer-text d-flex justify-center align-center">
            <p className="footer-copyrgiht-text">Copyright &copy; | {date}</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer