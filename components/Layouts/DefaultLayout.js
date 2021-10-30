import { ToastContainer } from 'react-toastify';
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Brand from '../Svg/Brand';
import Nav from '../Nav';
import { FiAlignCenter } from 'react-icons/fi';

const DefaultLayout = ({ children }) => {
	const navRef = useRef();
	const [toggleNav, setToggleNav] = useState(false);
	useEffect(() => {}, [toggleNav]);
	return (
		<div className='flex flex-col items-center h-full min-h-screen bg-teal-300 flex-nowrap'>
			<div className='fixed left-0 right-0 z-10 w-full bg-teal-50'>
				<header className='z-10 flex items-center justify-between w-full p-4 transform translate-x-0 md:items-baseline md:px-0 md:container'>
					<div className='flex w-24 sm:w-36 md:hidden'>
						<svg
							height='100%'
							width='100%'
							fill='none'
							viewBox='0 0 106 18'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M0.899824 17.52C3.15582 17.376 5.77982 16.752 5.77982 13.456V4.76801C5.77982 3.12001 5.84382 2.35201 5.97182 1.20001H2.27582C2.41982 2.35201 2.48382 3.12001 2.48382 4.76801V14.24C2.48382 16.144 2.16382 16.656 0.819824 17.28L0.899824 17.52Z'
								fill='currentColor'
							/>
							<path
								d='M13.6727 1.20001H9.7367C9.8967 1.72801 9.8487 1.984 9.7207 2.49601L7.1127 12.208C6.9527 12.8 6.8567 13.168 6.4567 14H7.1607C7.2087 13.216 7.3527 12.8 7.5127 12.192L8.2327 9.47201H12.4087L13.0967 11.984C13.3207 12.8 13.4167 13.152 13.4647 14H17.4007C17.0487 13.36 16.8567 12.896 16.6167 11.984L13.6727 1.20001ZM10.2967 1.776L12.2967 9.08801H8.3447L10.2967 1.776Z'
								fill='currentColor'
							/>
							<path
								d='M24.5847 14.32L29.4167 1.96801V10.432C29.4167 12.08 29.3527 12.848 29.2247 14H32.9047C32.7767 12.848 32.7127 12.08 32.7127 10.432V4.76801C32.7127 3.12001 32.7767 2.35201 32.9047 1.20001H29.3207L25.8327 9.90401L22.0567 1.20001H18.1367C18.2807 2.35201 18.3287 3.12001 18.3287 4.76801V10.432C18.3287 12.08 18.2807 12.848 18.1367 14H18.9207C18.7767 12.848 18.7127 12.08 18.7127 10.432V2.01601L23.9767 14.32H24.5847Z'
								fill='currentColor'
							/>
							<path
								d='M42.9883 14L43.6443 12.544C41.3243 13.504 40.4443 13.616 38.7163 13.616H37.5163V7.47201H38.2843C39.1323 7.47201 39.9963 7.47201 41.4843 7.63201V6.92801C39.9963 7.08801 39.1323 7.08801 38.2843 7.08801H37.5163V1.58401H38.8443C39.8363 1.58401 41.0043 1.74401 42.3003 2.70401L43.3403 1.20001H34.0123C34.1563 2.35201 34.2203 3.12001 34.2203 4.76801V10.432C34.2203 12.08 34.1563 12.848 34.0123 14H42.9883Z'
								fill='currentColor'
							/>
							<path
								d='M49.5084 14.32C51.6844 14.32 53.5724 13.232 53.5724 10.896C53.5724 8.62401 52.0045 7.56801 48.8204 5.53601C46.3564 3.984 45.7645 3.52001 45.7645 2.656C45.7645 1.88801 46.4684 1.264 47.6844 1.264C49.7804 1.264 50.5964 3.13601 51.1404 4.99201L53.3644 4.03201C51.7324 1.74401 50.0044 0.880005 47.8764 0.880005C45.7644 0.880005 43.9564 1.856 43.9564 3.84C43.9564 5.66401 45.0444 6.60801 47.8284 8.44801C50.5004 10.224 51.7645 11.024 51.7645 12.16C51.7645 13.248 51.0284 13.936 49.7484 13.936C47.6044 13.936 46.0844 11.824 45.4604 9.05601L43.2204 10.352C44.8044 13.264 46.7724 14.32 49.5084 14.32Z'
								fill='currentColor'
							/>
							<path
								d='M73.6723 14C73.5283 12.848 73.4803 12.08 73.4803 10.432V1.58401H73.6883C74.6963 1.58401 75.7203 1.74401 77.0003 2.70401L78.0563 1.20001H65.5923L66.6483 2.70401C67.9443 1.74401 68.9523 1.58401 69.9603 1.58401H70.1683V10.432C70.1683 12.08 70.1203 12.848 69.9763 14H73.6723Z'
								fill='currentColor'
							/>
							<path
								d='M81.9639 14C81.8199 12.848 81.7719 12.08 81.7719 10.432V4.76801C81.7719 3.12001 81.8199 2.35201 81.9639 1.20001H78.2679C78.4119 2.35201 78.4599 3.12001 78.4599 4.76801V10.432C78.4599 12.08 78.4119 12.848 78.2679 14H81.9639Z'
								fill='currentColor'
							/>
							<path
								d='M83.7854 14C83.6414 12.848 83.5934 12.08 83.5934 10.432V2.00001L83.7054 2.01601L89.9294 14H93.9294C93.7854 12.848 93.7374 12.08 93.7374 10.432V4.76801C93.7374 3.12001 93.7854 2.35201 93.9294 1.20001H93.2094C93.3374 2.35201 93.4014 3.12001 93.4014 4.76801V13.2L93.2894 13.184L87.0654 1.20001H83.0654C83.2094 2.35201 83.2574 3.12001 83.2574 4.76801V10.432C83.2574 12.08 83.2094 12.848 83.0654 14H83.7854Z'
								fill='currentColor'
							/>
							<path
								d='M101.743 1.20001H97.8073C97.9673 1.72801 97.9193 1.98401 97.7913 2.49601L95.1833 12.208C95.0233 12.8 94.9273 13.168 94.5273 14H95.2313C95.2793 13.216 95.4233 12.8 95.5833 12.192L96.3033 9.47201H100.479L101.167 11.984C101.391 12.8 101.487 13.152 101.535 14H105.471C105.119 13.36 104.927 12.896 104.687 11.984L101.743 1.20001ZM98.3673 1.77601L100.367 9.08801H96.4153L98.3673 1.77601Z'
								fill='currentColor'
							/>
							<path
								d='M66.9883 10.464C67.4683 12.752 66.9723 13.936 66.0123 13.936C65.4523 13.936 64.8763 13.552 64.2523 12.928C66.0283 11.312 66.6363 8.51201 65.7083 5.53601L63.3403 6.92801C64.2683 8.67201 64.3483 10.736 63.5803 12.176C63.0363 11.52 62.4603 10.736 61.8203 9.88801C61.1643 8.99201 60.3803 7.90401 59.7083 6.81601L59.8843 6.73601C61.4523 6.01601 63.0683 5.20001 63.0683 3.31201C63.0683 1.856 61.8683 0.880005 59.7723 0.880005C57.0683 0.880005 56.3163 2.32001 56.3163 3.66401C56.3163 4.576 56.8123 5.72801 57.5003 6.88001C55.8523 7.64801 54.5723 8.54401 54.5723 10.528C54.5723 13.184 57.3243 14.32 60.3803 14.32C61.5323 14.32 62.5403 14.048 63.3723 13.568C64.1883 14.064 65.0043 14.32 65.8843 14.32C67.0043 14.32 68.8603 13.904 69.2283 11.456L66.9883 10.464ZM59.7723 1.264C60.7163 1.264 61.1003 2 61.1003 3.00801C61.1003 3.984 60.8283 5.248 59.2763 6.08001C58.7003 5.00801 58.2843 3.96801 58.2843 3.13601C58.2843 2.01601 58.8123 1.264 59.7723 1.264ZM60.5243 13.936C58.4763 13.936 57.2123 12.4 57.2123 10.432C57.2123 9.40801 57.5483 8.57601 58.1563 7.92001C58.8603 8.94401 59.6443 9.92001 60.2683 10.672C61.1483 11.728 61.9803 12.56 62.7803 13.168C62.2203 13.648 61.4683 13.936 60.5243 13.936Z'
								fill='currentColor'
							/>
							<mask
								height='18'
								id='mask0_311:275'
								style={{ maskType: 'alpha' }}
								width='106'
								x='0'
								y='0'
								maskUnits='userSpaceOnUse'>
								<path
									d='M0.899824 17.52C3.15582 17.376 5.77982 16.752 5.77982 13.456V4.76801C5.77982 3.12001 5.84382 2.35201 5.97182 1.20001H2.27582C2.41982 2.35201 2.48382 3.12001 2.48382 4.76801V14.24C2.48382 16.144 2.16382 16.656 0.819824 17.28L0.899824 17.52Z'
									fill='currentColor'
								/>
								<path
									d='M13.6727 1.20001H9.7367C9.8967 1.72801 9.8487 1.984 9.7207 2.49601L7.1127 12.208C6.9527 12.8 6.8567 13.168 6.4567 14H7.1607C7.2087 13.216 7.3527 12.8 7.5127 12.192L8.2327 9.47201H12.4087L13.0967 11.984C13.3207 12.8 13.4167 13.152 13.4647 14H17.4007C17.0487 13.36 16.8567 12.896 16.6167 11.984L13.6727 1.20001ZM10.2967 1.776L12.2967 9.08801H8.3447L10.2967 1.776Z'
									fill='currentColor'
								/>
								<path
									d='M24.5847 14.32L29.4167 1.96801V10.432C29.4167 12.08 29.3527 12.848 29.2247 14H32.9047C32.7767 12.848 32.7127 12.08 32.7127 10.432V4.76801C32.7127 3.12001 32.7767 2.35201 32.9047 1.20001H29.3207L25.8327 9.90401L22.0567 1.20001H18.1367C18.2807 2.35201 18.3287 3.12001 18.3287 4.76801V10.432C18.3287 12.08 18.2807 12.848 18.1367 14H18.9207C18.7767 12.848 18.7127 12.08 18.7127 10.432V2.01601L23.9767 14.32H24.5847Z'
									fill='currentColor'
								/>
								<path
									d='M42.9883 14L43.6443 12.544C41.3243 13.504 40.4443 13.616 38.7163 13.616H37.5163V7.47201H38.2843C39.1323 7.47201 39.9963 7.47201 41.4843 7.63201V6.92801C39.9963 7.08801 39.1323 7.08801 38.2843 7.08801H37.5163V1.58401H38.8443C39.8363 1.58401 41.0043 1.74401 42.3003 2.70401L43.3403 1.20001H34.0123C34.1563 2.35201 34.2203 3.12001 34.2203 4.76801V10.432C34.2203 12.08 34.1563 12.848 34.0123 14H42.9883Z'
									fill='currentColor'
								/>
								<path
									d='M49.5084 14.32C51.6844 14.32 53.5724 13.232 53.5724 10.896C53.5724 8.62401 52.0045 7.56801 48.8204 5.53601C46.3564 3.984 45.7645 3.52001 45.7645 2.656C45.7645 1.88801 46.4684 1.264 47.6844 1.264C49.7804 1.264 50.5964 3.13601 51.1404 4.99201L53.3644 4.03201C51.7324 1.74401 50.0044 0.880005 47.8764 0.880005C45.7644 0.880005 43.9564 1.856 43.9564 3.84C43.9564 5.66401 45.0444 6.60801 47.8284 8.44801C50.5004 10.224 51.7645 11.024 51.7645 12.16C51.7645 13.248 51.0284 13.936 49.7484 13.936C47.6044 13.936 46.0844 11.824 45.4604 9.05601L43.2204 10.352C44.8044 13.264 46.7724 14.32 49.5084 14.32Z'
									fill='currentColor'
								/>
								<path
									d='M73.6723 14C73.5283 12.848 73.4803 12.08 73.4803 10.432V1.58401H73.6883C74.6963 1.58401 75.7203 1.74401 77.0003 2.70401L78.0563 1.20001H65.5923L66.6483 2.70401C67.9443 1.74401 68.9523 1.58401 69.9603 1.58401H70.1683V10.432C70.1683 12.08 70.1203 12.848 69.9763 14H73.6723Z'
									fill='currentColor'
								/>
								<path
									d='M81.9639 14C81.8199 12.848 81.7719 12.08 81.7719 10.432V4.76801C81.7719 3.12001 81.8199 2.35201 81.9639 1.20001H78.2679C78.4119 2.35201 78.4599 3.12001 78.4599 4.76801V10.432C78.4599 12.08 78.4119 12.848 78.2679 14H81.9639Z'
									fill='currentColor'
								/>
								<path
									d='M83.7854 14C83.6414 12.848 83.5934 12.08 83.5934 10.432V2.00001L83.7054 2.01601L89.9294 14H93.9294C93.7854 12.848 93.7374 12.08 93.7374 10.432V4.76801C93.7374 3.12001 93.7854 2.35201 93.9294 1.20001H93.2094C93.3374 2.35201 93.4014 3.12001 93.4014 4.76801V13.2L93.2894 13.184L87.0654 1.20001H83.0654C83.2094 2.35201 83.2574 3.12001 83.2574 4.76801V10.432C83.2574 12.08 83.2094 12.848 83.0654 14H83.7854Z'
									fill='currentColor'
								/>
								<path
									d='M101.743 1.20001H97.8073C97.9673 1.72801 97.9193 1.98401 97.7913 2.49601L95.1833 12.208C95.0233 12.8 94.9273 13.168 94.5273 14H95.2313C95.2793 13.216 95.4233 12.8 95.5833 12.192L96.3033 9.47201H100.479L101.167 11.984C101.391 12.8 101.487 13.152 101.535 14H105.471C105.119 13.36 104.927 12.896 104.687 11.984L101.743 1.20001ZM98.3673 1.77601L100.367 9.08801H96.4153L98.3673 1.77601Z'
									fill='currentColor'
								/>
								<path
									d='M66.9883 10.464C67.4683 12.752 66.9723 13.936 66.0123 13.936C65.4523 13.936 64.8763 13.552 64.2523 12.928C66.0283 11.312 66.6363 8.51201 65.7083 5.53601L63.3403 6.92801C64.2683 8.67201 64.3483 10.736 63.5803 12.176C63.0363 11.52 62.4603 10.736 61.8203 9.88801C61.1643 8.99201 60.3803 7.90401 59.7083 6.81601L59.8843 6.73601C61.4523 6.01601 63.0683 5.20001 63.0683 3.31201C63.0683 1.856 61.8683 0.880005 59.7723 0.880005C57.0683 0.880005 56.3163 2.32001 56.3163 3.66401C56.3163 4.576 56.8123 5.72801 57.5003 6.88001C55.8523 7.64801 54.5723 8.54401 54.5723 10.528C54.5723 13.184 57.3243 14.32 60.3803 14.32C61.5323 14.32 62.5403 14.048 63.3723 13.568C64.1883 14.064 65.0043 14.32 65.8843 14.32C67.0043 14.32 68.8603 13.904 69.2283 11.456L66.9883 10.464ZM59.7723 1.264C60.7163 1.264 61.1003 2 61.1003 3.00801C61.1003 3.984 60.8283 5.248 59.2763 6.08001C58.7003 5.00801 58.2843 3.96801 58.2843 3.13601C58.2843 2.01601 58.8123 1.264 59.7723 1.264ZM60.5243 13.936C58.4763 13.936 57.2123 12.4 57.2123 10.432C57.2123 9.40801 57.5483 8.57601 58.1563 7.92001C58.8603 8.94401 59.6443 9.92001 60.2683 10.672C61.1483 11.728 61.9803 12.56 62.7803 13.168C62.2203 13.648 61.4683 13.936 60.5243 13.936Z'
									fill='currentColor'
								/>
							</mask>
							<g mask='url(#mask0_311:275)'>
								<circle
									cx='54.9625'
									cy='11.3568'
									fill='#FD8002'
									r='2.12367'
								/>
								<circle
									cx='24.9166'
									cy='0.7386'
									fill='#FD8002'
									r='2.12367'
								/>
								<circle
									cx='9.59926'
									cy='3.64869'
									fill='#FD8002'
									r='2.12367'
								/>
								<circle
									cx='104.42'
									cy='4.6664'
									fill='#FD8002'
									r='2.12367'
								/>
								<circle
									cx='54.9625'
									cy='4.98579'
									fill='#F02EC5'
									r='2.12367'
								/>
								<circle
									cx='45.3849'
									cy='11.3568'
									fill='#FF0000'
									r='2.12367'
								/>
								<circle
									cx='47.6901'
									cy='0.7386'
									fill='#FF0000'
									r='2.12367'
								/>
								<circle
									cx='64.8683'
									cy='9.23323'
									fill='#FBE309'
									r='2.12367'
								/>
								<circle
									cx='19.9596'
									cy='4.6664'
									fill='#FBE309'
									r='2.12367'
								/>
								<circle
									cx='80.944'
									cy='14.1129'
									fill='#FBE309'
									r='2.12367'
								/>
								<circle
									cx='50.3043'
									cy='10.185'
									fill='#FBE309'
									r='2.12367'
								/>
								<circle
									cx='34.2355'
									cy='2.8622'
									fill='#00FF66'
									r='2.12367'
								/>
								<circle
									cx='96.1793'
									cy='9.23323'
									fill='#00FF66'
									r='2.12367'
								/>
								<circle
									cx='104.42'
									cy='14.1129'
									fill='#00FF66'
									r='2.12367'
								/>
								<circle
									cx='0.102674'
									cy='11.1856'
									fill='#00FF66'
									r='2.12367'
								/>
								<circle
									cx='87.943'
									cy='-0.551317'
									fill='#7409FB'
									fillOpacity='0.94'
									r='2.12367'
								/>
								<circle
									cx='76.6964'
									cy='6.93831'
									fill='#7409FB'
									fillOpacity='0.94'
									r='2.12367'
								/>
								<circle
									cx='62.7443'
									cy='0.738477'
									fill='#0FB5FD'
									r='2.12367'
								/>
								<circle
									cx='15.1207'
									cy='9.72365'
									fill='#0FB5FD'
									r='2.12367'
								/>
							</g>
						</svg>
					</div>
					<div className='hidden w-24 md:flex'>
						<svg
							height='100%'
							width='100%'
							fill='none'
							viewBox='0 0 55 29'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M0.524336 17.27C2.78034 17.126 5.40434 16.502 5.40434 13.206V4.51801C5.40434 2.87001 5.46834 2.10201 5.59634 0.950006H1.90034C2.04434 2.10201 2.10834 2.87001 2.10834 4.51801V13.99C2.10834 15.894 1.78834 16.406 0.444336 17.03L0.524336 17.27Z'
								fill='currentColor'
							/>
							<path
								d='M13.2972 0.950006H9.36121C9.52121 1.47801 9.47321 1.734 9.34521 2.24601L6.73721 11.958C6.57721 12.55 6.48121 12.918 6.08121 13.75H6.78521C6.83321 12.966 6.97721 12.55 7.13721 11.942L7.85721 9.22201H12.0332L12.7212 11.734C12.9452 12.55 13.0412 12.902 13.0892 13.75H17.0252C16.6732 13.11 16.4812 12.646 16.2412 11.734L13.2972 0.950006ZM9.92121 1.526L11.9212 8.83801H7.96921L9.92121 1.526Z'
								fill='currentColor'
							/>
							<path
								d='M24.2092 14.07L29.0412 1.71801V10.182C29.0412 11.83 28.9772 12.598 28.8492 13.75H32.5292C32.4012 12.598 32.3372 11.83 32.3372 10.182V4.51801C32.3372 2.87001 32.4012 2.10201 32.5292 0.950006H28.9452L25.4572 9.65401L21.6812 0.950006H17.7612C17.9052 2.10201 17.9532 2.87001 17.9532 4.51801V10.182C17.9532 11.83 17.9052 12.598 17.7612 13.75H18.5452C18.4012 12.598 18.3372 11.83 18.3372 10.182V1.76601L23.6012 14.07H24.2092Z'
								fill='currentColor'
							/>
							<path
								d='M42.6128 13.75L43.2688 12.294C40.9488 13.254 40.0688 13.366 38.3408 13.366H37.1408V7.22201H37.9088C38.7568 7.22201 39.6208 7.22201 41.1088 7.38201V6.67801C39.6208 6.83801 38.7568 6.83801 37.9088 6.83801H37.1408V1.33401H38.4688C39.4608 1.33401 40.6288 1.49401 41.9248 2.45401L42.9648 0.950006H33.6368C33.7808 2.10201 33.8448 2.87001 33.8448 4.51801V10.182C33.8448 11.83 33.7808 12.598 33.6368 13.75H42.6128Z'
								fill='currentColor'
							/>
							<path
								d='M49.133 14.07C51.309 14.07 53.197 12.982 53.197 10.646C53.197 8.37401 51.629 7.31801 48.445 5.28601C45.981 3.734 45.389 3.27001 45.389 2.406C45.389 1.63801 46.093 1.014 47.309 1.014C49.405 1.014 50.221 2.88601 50.765 4.74201L52.989 3.78201C51.357 1.49401 49.629 0.630005 47.501 0.630005C45.389 0.630005 43.581 1.606 43.581 3.59C43.581 5.41401 44.669 6.35801 47.453 8.19801C50.125 9.97401 51.389 10.774 51.389 11.91C51.389 12.998 50.653 13.686 49.373 13.686C47.229 13.686 45.709 11.574 45.085 8.80601L42.845 10.102C44.429 13.014 46.397 14.07 49.133 14.07Z'
								fill='currentColor'
							/>
							<path
								d='M22.788 27.9052C22.644 26.7532 22.596 25.9852 22.596 24.3372V15.4892H22.804C23.812 15.4892 24.836 15.6492 26.116 16.6092L27.172 15.1052H14.708L15.764 16.6092C17.06 15.6492 18.068 15.4892 19.076 15.4892H19.284V24.3372C19.284 25.9852 19.236 26.7532 19.092 27.9052H22.788Z'
								fill='currentColor'
							/>
							<path
								d='M31.0796 27.9052C30.9356 26.7532 30.8876 25.9852 30.8876 24.3372V18.6732C30.8876 17.0252 30.9356 16.2572 31.0796 15.1052H27.3836C27.5276 16.2572 27.5756 17.0252 27.5756 18.6732V24.3372C27.5756 25.9852 27.5276 26.7532 27.3836 27.9052H31.0796Z'
								fill='currentColor'
							/>
							<path
								d='M32.9011 27.9052C32.7571 26.7532 32.7091 25.9852 32.7091 24.3372V15.9052L32.8211 15.9212L39.0451 27.9052H43.0451C42.9011 26.7532 42.8531 25.9852 42.8531 24.3372V18.6732C42.8531 17.0252 42.9011 16.2572 43.0451 15.1052H42.3251C42.4531 16.2572 42.5171 17.0252 42.5171 18.6732V27.1052L42.4051 27.0892L36.1811 15.1052H32.1811C32.3251 16.2572 32.3731 17.0252 32.3731 18.6732V24.3372C32.3731 25.9852 32.3251 26.7532 32.1811 27.9052H32.9011Z'
								fill='currentColor'
							/>
							<path
								d='M50.859 15.1052H46.923C47.083 15.6332 47.035 15.8892 46.907 16.4012L44.299 26.1132C44.139 26.7052 44.043 27.0732 43.643 27.9052H44.347C44.395 27.1212 44.539 26.7052 44.699 26.0972L45.419 23.3772H49.595L50.283 25.8892C50.507 26.7052 50.603 27.0572 50.651 27.9052H54.587C54.235 27.2652 54.043 26.8012 53.803 25.8892L50.859 15.1052ZM47.483 15.6812L49.483 22.9932H45.531L47.483 15.6812Z'
								fill='currentColor'
							/>
							<path
								d='M16.1045 24.3692C16.5845 26.6572 16.0885 27.8412 15.1285 27.8412C14.5685 27.8412 13.9925 27.4572 13.3685 26.8332C15.1445 25.2172 15.7525 22.4172 14.8245 19.4412L12.4565 20.8332C13.3845 22.5772 13.4645 24.6412 12.6965 26.0812C12.1525 25.4252 11.5765 24.6412 10.9365 23.7932C10.2805 22.8972 9.49648 21.8092 8.82448 20.7212L9.00048 20.6412C10.5685 19.9212 12.1845 19.1052 12.1845 17.2172C12.1845 15.7612 10.9845 14.7852 8.88848 14.7852C6.18448 14.7852 5.43248 16.2252 5.43248 17.5692C5.43248 18.4812 5.92848 19.6332 6.61648 20.7852C4.96848 21.5532 3.68848 22.4492 3.68848 24.4332C3.68848 27.0892 6.44048 28.2252 9.49648 28.2252C10.6485 28.2252 11.6565 27.9532 12.4885 27.4732C13.3045 27.9692 14.1205 28.2252 15.0005 28.2252C16.1205 28.2252 17.9765 27.8092 18.3445 25.3612L16.1045 24.3692ZM8.88848 15.1692C9.83248 15.1692 10.2165 15.9052 10.2165 16.9132C10.2165 17.8892 9.94448 19.1532 8.39248 19.9852C7.81648 18.9132 7.40048 17.8732 7.40048 17.0412C7.40048 15.9212 7.92848 15.1692 8.88848 15.1692ZM9.64048 27.8412C7.59248 27.8412 6.32848 26.3052 6.32848 24.3372C6.32848 23.3132 6.66448 22.4812 7.27248 21.8252C7.97648 22.8492 8.76048 23.8252 9.38448 24.5772C10.2645 25.6332 11.0965 26.4652 11.8965 27.0732C11.3365 27.5532 10.5845 27.8412 9.64048 27.8412Z'
								fill='currentColor'
							/>
							<mask
								height='29'
								id='mask0_311:281'
								style={{ maskType: 'alpha' }}
								width='55'
								x='0'
								y='0'
								maskUnits='userSpaceOnUse'>
								<path
									d='M0.524336 17.27C2.78034 17.126 5.40434 16.502 5.40434 13.206V4.51801C5.40434 2.87001 5.46834 2.10201 5.59634 0.950006H1.90034C2.04434 2.10201 2.10834 2.87001 2.10834 4.51801V13.99C2.10834 15.894 1.78834 16.406 0.444336 17.03L0.524336 17.27Z'
									fill='currentColor'
								/>
								<path
									d='M13.2972 0.950006H9.36121C9.52121 1.47801 9.47321 1.734 9.34521 2.24601L6.73721 11.958C6.57721 12.55 6.48121 12.918 6.08121 13.75H6.78521C6.83321 12.966 6.97721 12.55 7.13721 11.942L7.85721 9.22201H12.0332L12.7212 11.734C12.9452 12.55 13.0412 12.902 13.0892 13.75H17.0252C16.6732 13.11 16.4812 12.646 16.2412 11.734L13.2972 0.950006ZM9.92121 1.526L11.9212 8.83801H7.96921L9.92121 1.526Z'
									fill='currentColor'
								/>
								<path
									d='M24.2092 14.07L29.0412 1.71801V10.182C29.0412 11.83 28.9772 12.598 28.8492 13.75H32.5292C32.4012 12.598 32.3372 11.83 32.3372 10.182V4.51801C32.3372 2.87001 32.4012 2.10201 32.5292 0.950006H28.9452L25.4572 9.65401L21.6812 0.950006H17.7612C17.9052 2.10201 17.9532 2.87001 17.9532 4.51801V10.182C17.9532 11.83 17.9052 12.598 17.7612 13.75H18.5452C18.4012 12.598 18.3372 11.83 18.3372 10.182V1.76601L23.6012 14.07H24.2092Z'
									fill='currentColor'
								/>
								<path
									d='M42.6128 13.75L43.2688 12.294C40.9488 13.254 40.0688 13.366 38.3408 13.366H37.1408V7.22201H37.9088C38.7568 7.22201 39.6208 7.22201 41.1088 7.38201V6.67801C39.6208 6.83801 38.7568 6.83801 37.9088 6.83801H37.1408V1.33401H38.4688C39.4608 1.33401 40.6288 1.49401 41.9248 2.45401L42.9648 0.950006H33.6368C33.7808 2.10201 33.8448 2.87001 33.8448 4.51801V10.182C33.8448 11.83 33.7808 12.598 33.6368 13.75H42.6128Z'
									fill='currentColor'
								/>
								<path
									d='M49.133 14.07C51.309 14.07 53.197 12.982 53.197 10.646C53.197 8.37401 51.629 7.31801 48.445 5.28601C45.981 3.734 45.389 3.27001 45.389 2.406C45.389 1.63801 46.093 1.014 47.309 1.014C49.405 1.014 50.221 2.88601 50.765 4.74201L52.989 3.78201C51.357 1.49401 49.629 0.630005 47.501 0.630005C45.389 0.630005 43.581 1.606 43.581 3.59C43.581 5.41401 44.669 6.35801 47.453 8.19801C50.125 9.97401 51.389 10.774 51.389 11.91C51.389 12.998 50.653 13.686 49.373 13.686C47.229 13.686 45.709 11.574 45.085 8.80601L42.845 10.102C44.429 13.014 46.397 14.07 49.133 14.07Z'
									fill='currentColor'
								/>
								<path
									d='M22.788 27.9052C22.644 26.7532 22.596 25.9852 22.596 24.3372V15.4892H22.804C23.812 15.4892 24.836 15.6492 26.116 16.6092L27.172 15.1052H14.708L15.764 16.6092C17.06 15.6492 18.068 15.4892 19.076 15.4892H19.284V24.3372C19.284 25.9852 19.236 26.7532 19.092 27.9052H22.788Z'
									fill='currentColor'
								/>
								<path
									d='M31.0796 27.9052C30.9356 26.7532 30.8876 25.9852 30.8876 24.3372V18.6732C30.8876 17.0252 30.9356 16.2572 31.0796 15.1052H27.3836C27.5276 16.2572 27.5756 17.0252 27.5756 18.6732V24.3372C27.5756 25.9852 27.5276 26.7532 27.3836 27.9052H31.0796Z'
									fill='currentColor'
								/>
								<path
									d='M32.9011 27.9052C32.7571 26.7532 32.7091 25.9852 32.7091 24.3372V15.9052L32.8211 15.9212L39.0451 27.9052H43.0451C42.9011 26.7532 42.8531 25.9852 42.8531 24.3372V18.6732C42.8531 17.0252 42.9011 16.2572 43.0451 15.1052H42.3251C42.4531 16.2572 42.5171 17.0252 42.5171 18.6732V27.1052L42.4051 27.0892L36.1811 15.1052H32.1811C32.3251 16.2572 32.3731 17.0252 32.3731 18.6732V24.3372C32.3731 25.9852 32.3251 26.7532 32.1811 27.9052H32.9011Z'
									fill='currentColor'
								/>
								<path
									d='M50.859 15.1052H46.923C47.083 15.6332 47.035 15.8892 46.907 16.4012L44.299 26.1132C44.139 26.7052 44.043 27.0732 43.643 27.9052H44.347C44.395 27.1212 44.539 26.7052 44.699 26.0972L45.419 23.3772H49.595L50.283 25.8892C50.507 26.7052 50.603 27.0572 50.651 27.9052H54.587C54.235 27.2652 54.043 26.8012 53.803 25.8892L50.859 15.1052ZM47.483 15.6812L49.483 22.9932H45.531L47.483 15.6812Z'
									fill='currentColor'
								/>
								<path
									d='M16.1045 24.3692C16.5845 26.6572 16.0885 27.8412 15.1285 27.8412C14.5685 27.8412 13.9925 27.4572 13.3685 26.8332C15.1445 25.2172 15.7525 22.4172 14.8245 19.4412L12.4565 20.8332C13.3845 22.5772 13.4645 24.6412 12.6965 26.0812C12.1525 25.4252 11.5765 24.6412 10.9365 23.7932C10.2805 22.8972 9.49648 21.8092 8.82448 20.7212L9.00048 20.6412C10.5685 19.9212 12.1845 19.1052 12.1845 17.2172C12.1845 15.7612 10.9845 14.7852 8.88848 14.7852C6.18448 14.7852 5.43248 16.2252 5.43248 17.5692C5.43248 18.4812 5.92848 19.6332 6.61648 20.7852C4.96848 21.5532 3.68848 22.4492 3.68848 24.4332C3.68848 27.0892 6.44048 28.2252 9.49648 28.2252C10.6485 28.2252 11.6565 27.9532 12.4885 27.4732C13.3045 27.9692 14.1205 28.2252 15.0005 28.2252C16.1205 28.2252 17.9765 27.8092 18.3445 25.3612L16.1045 24.3692ZM8.88848 15.1692C9.83248 15.1692 10.2165 15.9052 10.2165 16.9132C10.2165 17.8892 9.94448 19.1532 8.39248 19.9852C7.81648 18.9132 7.40048 17.8732 7.40048 17.0412C7.40048 15.9212 7.92848 15.1692 8.88848 15.1692ZM9.64048 27.8412C7.59248 27.8412 6.32848 26.3052 6.32848 24.3372C6.32848 23.3132 6.66448 22.4812 7.27248 21.8252C7.97648 22.8492 8.76048 23.8252 9.38448 24.5772C10.2645 25.6332 11.0965 26.4652 11.8965 27.0732C11.3365 27.5532 10.5845 27.8412 9.64048 27.8412Z'
									fill='currentColor'
								/>
							</mask>
							<g mask='url(#mask0_311:281)'>
								<circle
									cx='54.5866'
									cy='11.1069'
									fill='#FD8002'
									r='2.12367'
								/>
								<circle
									cx='24.5407'
									cy='0.4886'
									fill='#FD8002'
									r='2.12367'
								/>
								<circle
									cx='9.22377'
									cy='3.39869'
									fill='#FD8002'
									r='2.12367'
								/>
								<circle
									cx='45.6505'
									cy='23.2805'
									fill='#FD8002'
									r='2.12367'
								/>
								<circle
									cx='54.5866'
									cy='4.73585'
									fill='#F02EC5'
									r='2.12367'
								/>
								<circle
									cx='45.0094'
									cy='11.1069'
									fill='#FF0000'
									r='2.12367'
								/>
								<circle
									cx='47.3141'
									cy='0.4886'
									fill='#FF0000'
									r='2.12367'
								/>
								<circle
									cx='14.4791'
									cy='17.2289'
									fill='#FF0000'
									r='2.12367'
								/>
								<circle
									cx='6.09877'
									cy='27.8473'
									fill='#FBE309'
									r='2.12367'
								/>
								<circle
									cx='51.2394'
									cy='27.1016'
									fill='#FBE309'
									r='2.12367'
								/>
								<circle
									cx='19.5836'
									cy='4.4164'
									fill='#FBE309'
									r='2.12367'
								/>
								<circle
									cx='39.3204'
									cy='19.4594'
									fill='#FBE309'
									r='2.12367'
								/>
								<circle
									cx='49.9288'
									cy='9.93501'
									fill='#FBE309'
									r='2.12367'
								/>
								<circle
									cx='33.86'
									cy='2.6122'
									fill='#00FF66'
									r='2.12367'
								/>
								<circle
									cx='37.4098'
									cy='27.8473'
									fill='#00FF66'
									r='2.12367'
								/>
								<circle
									cx='-0.272814'
									cy='10.9356'
									fill='#00FF66'
									r='2.12367'
								/>
								<circle
									cx='29.1735'
									cy='18.0628'
									fill='#7409FB'
									fillOpacity='0.94'
									r='2.12367'
								/>
								<circle
									cx='17.9269'
									cy='25.5524'
									fill='#7409FB'
									fillOpacity='0.94'
									r='2.12367'
								/>
								<circle
									cx='3.97474'
									cy='19.3526'
									fill='#0FB5FD'
									r='2.12367'
								/>
								<circle
									cx='14.7453'
									cy='9.47371'
									fill='#0FB5FD'
									r='2.12367'
								/>
							</g>
						</svg>
					</div>
					<Nav />
					<div className='md:hidden'>
						<button
							onClick={() => {
								setToggleNav(!toggleNav);
							}}
							className='btn'>
							<span>menu</span>
							<FiAlignCenter />
						</button>
					</div>
				</header>
			</div>

			<main className='w-full h-full min-h-full bg-teal-300 space-y-36'>
				{children}
			</main>
			<ToastContainer />
		</div>
	);
};

export default DefaultLayout;
