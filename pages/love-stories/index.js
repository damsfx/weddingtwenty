import { table, getMinifiedRecords } from '../api/utils/Airtable';
import LoveStories from '../../components/Forms/LoveStories/LoveStories';

function LoveNotes({ stories }) {
	return (
		<div className='z-10 flex items-center justify-center h-full transform translate-x-0 '>
			<div className='w-full rounded shadow sm:w-3/4'>
				<LoveStories />
			</div>
		</div>
	);
}

export default LoveNotes;

export const getStaticProps = async () => {
	const records = await table('LoveStories')
		.select({ view: 'Grid view' })
		.firstPage();
	const minifiedRecords = getMinifiedRecords(records);
	return {
		props: {
			stories: minifiedRecords.map((record) => record),
		},
		revalidate: 10,
	};
};
