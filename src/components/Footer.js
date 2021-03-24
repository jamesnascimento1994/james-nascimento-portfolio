import React from 'react'
import {
    LinkedinIcon,
    LinkedinShareButton,
} from 'react-share';
import {Icon} from '@iconify/react';
import githubIcon from '@iconify-icons/codicon/github';

const Footer = () => {
    return (
			<div className='footer'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-4 col-md-6 col-sm-6'>
							<div className='d-flex'>
								<p>Staten Island, NY</p>
							</div>
							<div className='d-flex'>
								<a href='tel:555-555-5555'>+7(960)555-5555</a>
							</div>
							<div className='d-flex'>
								<p>james.nascimento94@yahoo.com</p>
							</div>
						</div>
						<div className='col-lg-3 col-md-2 col-sm-6'>
							<div className='row'>
								<div className='col'>
									<a className='footer-nav'>Home</a>
                                    <br/>
									<a className='footer-nav'>About Me</a>
								</div>
                                <div className="col">
									<a className='footer-nav'>Skills</a>
                                    <br/>
                                    <a className="footer-nav">Portfolio</a>
                                </div>
							</div>
						</div>
                        <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                          <div className="d-flex justify-content-center">
                    <LinkedinShareButton>
                        <LinkedinIcon className="mx-3" size={36} />
                    </LinkedinShareButton>
                        <Icon icon={githubIcon} height={55} width="70"/>
                              </div>
                              <div className="pt-3 text-center">
                                Copyright&copy;
                                {new Date().getFullYear()}&nsbp;New Horizon | All Rights Reserved
                            </div>  
                        </div>
					</div>
				</div>
			</div>
		);
}

export default Footer
