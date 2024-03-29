import React from 'react';
import NavBar from '../NavBar/NavBar';
import style from './DetailRoutine.module.css';
import Excercise from '../Excercise/Excercise';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useGetRoutinesByIdQuery } from '../../redux/query/api';
import { Link, useMatch, useParams, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DetailRoutine = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { data: routineDetail, isLoading } = useGetRoutinesByIdQuery(id);
	let excerciseDays;

	excerciseDays = routineDetail?.excercises?.map((exercise) => exercise.day);
	excerciseDays = excerciseDays?.filter(
		(day, i) => excerciseDays.indexOf(day) === i
	);

	function handlerClickBack() {
		navigate(-1);
	}
	if (isLoading) return <Loading />;
	return (
		<div>
			<NavBar />
			<div className={style.mainContainer}>
				<div className={style.cardContainer}>
					<div className={style.goBack}>
						<IconButton
							onClick={handlerClickBack}
							sx={{
								color: 'var(--black-color)',
								'&:hover': {
									borderColor: 'var(--black-color)',
									backgroundColor: 'var(--hover-outlined-button)',
									transition: '0.4s ease-in-out',
								},
							}}
						>
							<ArrowBackIcon />
						</IconButton>
					</div>
					<div className={style.infoContainer}>
						<img
							className={style.imgClass}
							src={routineDetail?.imgUrl}
							alt='press banca'
						/>
						<div className={style.titlesContainer}>
							<h1>{routineDetail?.name}</h1>
							<h2>{routineDetail?.category.name}</h2>
							<div className={style.icons}>
								<HourglassFullIcon sx={{ fontSize: '1.7rem' }} />
								<h2>{routineDetail?.duration} Minutos</h2>
							</div>
							<div className={style.icons}>
								<TrendingUpIcon sx={{ fontSize: '1.7rem' }} />
								<div className={style.bolitasContainer}>
									<div
										className={`${style.bolitas} ${
											routineDetail?.difficulty >= 1
												? style.bolitasActive
												: style.bolitasDesactive
										}`}
									></div>
									<div
										className={`${style.bolitas} ${
											routineDetail?.difficulty >= 2
												? style.bolitasActive
												: style.bolitasDesactive
										}`}
									></div>
									<div
										className={`${style.bolitas} ${
											routineDetail?.difficulty >= 3
												? style.bolitasActive
												: style.bolitasDesactive
										}`}
									></div>
									<div
										className={`${style.bolitas} ${
											routineDetail?.difficulty >= 4
												? style.bolitasActive
												: style.bolitasDesactive
										}`}
									></div>
									<div
										className={`${style.bolitas} ${
											routineDetail?.difficulty >= 5
												? style.bolitasActive
												: style.bolitasDesactive
										}`}
									></div>
								</div>
							</div>
						</div>
					</div>
					<div className={style.execerciseContainer}>
						{/* Dia 1 */}
						{excerciseDays?.includes(1) && (
							<div className={style.execercises}>
								<h2>Día 1</h2>
								{routineDetail?.excercises?.map((excercise) => {
									if (excercise.day === 1) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												gif={excercise.gifUrl}
												series={excercise.series}
												repetitions={excercise.repetitions}
												muscle={excercise.muscle}
											/>
										);
									}
								})}
							</div>
						)}
						{/* Dia 2 */}
						{excerciseDays?.includes(2) && (
							<div className={style.execercises}>
								<h2>Día 2</h2>
								{routineDetail?.excercises?.map((excercise) => {
									if (excercise.day === 2) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												gif={excercise.gifUrl}
												series={excercise.series}
												repetitions={excercise.repetitions}
												muscle={excercise.muscle}
											/>
										);
									}
								})}
							</div>
						)}
						{/* Dia 3 */}
						{excerciseDays?.includes(3) && (
							<div className={style.execercises}>
								<h2>Día 3</h2>
								{routineDetail?.excercises?.map((excercise) => {
									if (excercise.day === 3) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												gif={excercise.gifUrl}
												series={excercise.series}
												repetitions={excercise.repetitions}
												muscle={excercise.muscle}
											/>
										);
									}
								})}
							</div>
						)}
						{/* Dia 4 */}
						{excerciseDays?.includes(4) && (
							<div className={style.execercises}>
								<h2>Día 4</h2>
								{routineDetail?.excercises?.map((excercise) => {
									if (excercise.day === 4) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												gif={excercise.gifUrl}
												series={excercise.series}
												repetitions={excercise.repetitions}
												muscle={excercise.muscle}
											/>
										);
									}
								})}
							</div>
						)}
						{/* Dia 5 */}
						{excerciseDays?.includes(5) && (
							<div className={style.execercises}>
								<h2>Día 5</h2>
								{routineDetail?.excercises?.map((excercise) => {
									if (excercise.day === 5) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												gif={excercise.gifUrl}
												series={excercise.series}
												repetitions={excercise.repetitions}
												muscle={excercise.muscle}
											/>
										);
									}
								})}
							</div>
						)}
						{/* Dia 6 */}
						{excerciseDays?.includes(6) && (
							<div className={style.execercises}>
								<h2>Día 6</h2>
								{routineDetail?.excercises?.map((excercise) => {
									if (excercise.day === 6) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												gif={excercise.gifUrl}
												series={excercise.series}
												repetitions={excercise.repetitions}
												muscle={excercise.muscle}
											/>
										);
									}
								})}
							</div>
						)}
						{/* Dia 7 */}
						{excerciseDays?.includes(7) && (
							<div className={style.execercises}>
								<h2>Día 7</h2>
								{routineDetail?.excercises?.map((excercise) => {
									if (excercise.day === 7) {
										return (
											<Excercise
												key={excercise.id}
												name={excercise.name}
												gif={excercise.gifUrl}
												series={excercise.series}
												repetitions={excercise.repetitions}
												muscle={excercise.muscle}
											/>
										);
									}
								})}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailRoutine;
