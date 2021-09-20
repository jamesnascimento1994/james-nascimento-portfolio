import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faPython, faJava, faPhp, faReact, faBootstrap, faNodeJs, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import {Icon} from '@iconify/react';
import typescriptIcon from '@iconify-icons/logos/typescript-icon';
import bxUquery from '@iconify-icons/bx/bxl-jquery';
import djangoIcon from '@iconify-icons/cib/django';
import fileTypeSql from '@iconify-icons/vscode-icons/file-type-sql';
import mysqlIcon from '@iconify-icons/cib/mysql';
import postgresqlIcon from '@iconify-icons/logos/postgresql';
import mongodbIcon from '@iconify-icons/logos/mongodb';
import fileTypeVscode from '@iconify-icons/vscode-icons/file-type-vscode';
import eclipsIcon from '@iconify-icons/logos/eclipse-icon';
import pycharmIcon from '@iconify-icons/logos/pycharm';
import sublimetextIcon from '@iconify-icons/logos/sublimetext-icon';
import codepenCircleFilled from '@iconify-icons/ant-design/codepen-circle-filled';

const Skills = () => {
    return (
			<div id="skills" className='skills'>
				<h1 className='py-5'>My Skills</h1>
					<div className='container'>
						<div className='row'>
							<div className='col-md-3 col-sm-6'>
								<div className='box'>
									<h3>Programming Languages</h3>
									<div className='icon-container'>
										<FontAwesomeIcon icon={faHtml5} size='4x' />{' '}
										<FontAwesomeIcon icon={faCss3} size='4x' />{' '}
										<FontAwesomeIcon icon={faJs} size='4x' />
									</div>
									<div className='icon-container'>
										<FontAwesomeIcon icon={faPython} size='4x' />{' '}
										{/* 
                                            <FontAwesomeIcon icon={faJava} size='4x' />{' '}
                                            <Icon icon={typescriptIcon} height={55} width={70} className="typescript-icon"/>
                                        */}
									</div>
                                    {/* 
                                        <div className="icon-container">
                                        <FontAwesomeIcon icon={faPhp} size="4x" className="php-icon"/>{' '}
                                    </div>
                                    */}
								</div>
							</div>

							{/* - */}
							<div className='col-md-3 col-sm-6'>
								<div className='box'>
									<h3>Frameworks / Libraries</h3>
                                    <div className="icon-container">
                                        <FontAwesomeIcon icon={faReact} size="4x"/>{' '}
                                        <h1 className="express-logo">ex</h1>{' '}
                                        <FontAwesomeIcon icon={faBootstrap} size="4x"/>
                                    </div>
                                    <div className="icon-container">
                                        <Icon icon={bxUquery} height={55} width={70}/>
                                        <Icon icon={djangoIcon} height={55} width={70} />
                                        <FontAwesomeIcon icon={faNodeJs} size="4x" />
                                    </div>
								</div>
							</div>
							{/* - */}
							<div className='col-md-3 col-sm-6'>
								<div className='box'>
									<h3>Database Languages</h3>
                                    {/*<div className="icon-container">
                                    <Icon icon={fileTypeSql} height={55} width={70} />
                                    <Icon icon={mysqlIcon} height={55} width={70} />
                                    <Icon icon={postgresqlIcon} height={55} width={70} />
                                    </div> */}
                                    <div className="icon-container">
                                        <Icon icon={mongodbIcon} height={55} width={70} className="mongodb-icon"/>
                                        <h1 className="mongoose-logo">mongoose</h1>
                                    </div>
								</div>
							</div>
                            {/* - */}
                            <div className="col-md-3 col-sm-6">
                                <div className="box">
                                <h3>Other</h3>
                                <div className="icon-container">
                                <FontAwesomeIcon icon={faGitAlt} size="4x" />
                                <Icon icon={fileTypeVscode} height={55} width={70} />
                                <Icon icon={eclipsIcon} height={55} width={70} />
                                </div>
                                <div className="icon-container">
                                <Icon icon={pycharmIcon} height={55} width={70} />
                                <Icon icon={sublimetextIcon} height={55} width={70} />
                                <Icon icon={codepenCircleFilled} height={55} width={70} />
                                </div>
                                </div>
                            </div>
						</div>
					</div>
				</div>
		);
}


export default Skills;
