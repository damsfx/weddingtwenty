import React from 'react';
import Head from 'next/head';
import { FindGuest } from '../components/Forms/FindGuest/FindGuest';
import Hero from '../components/Hero';
import Section from '../components/Section';
import CTA from '../components/RSVP/CTA';
import DayAndNight from '../components/DayAndNight';
import Gifting from '../components/Gifting';
import CWord from '../components/CWord';
import Accept from '../components/RSVP/Accept';
import { table, getMinifiedRecords } from '../pages/api/utils/Airtable';
import Covid from '../components/Content/Covid';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';

export default function Home({ events }) {
	const [showDialog, setShowDialog] = React.useState(false);
	const open = () => setShowDialog(true);
	const close = () => setShowDialog(false);

	return (
		<>
			<Head>
				<title>James&amp;Tinas Wedding</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<button onclick={open}>RSVP</button>

			<CTA handleClick={open} />
			<Hero />
			<button onClick={open}>Show Dialog</button>
			<Section id='welcome' title='Welcome'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Magnam modi cupiditate quas accusamus, incidunt corporis
					voluptates id tempore ut nobis.
				</p>
			</Section>
			<Section id='the-c-word' title='Covid'>
				<CWord />
			</Section>
			<Section id='gifts' title='Gifts'>
				{/* <Covid /> */}
				<Gifting />
			</Section>

			<DialogOverlay isOpen={showDialog} onDismiss={close}>
				<DialogContent>
					<Accept />
					<button onClick={close}>Got it.</button>
				</DialogContent>
			</DialogOverlay>
			<Section id='day-and-night' title='Day and night'>
				<DayAndNight events={events} />
			</Section>
		</>
	);
}

export async function getStaticProps() {
	const itemRecords = await table('Events')
		.select({ view: 'Grid view' })
		.firstPage();
	const events = getMinifiedRecords(itemRecords);
	console.log(events);
	console.log(events);
	return {
		props: {
			events: events,
		},
	};
}
