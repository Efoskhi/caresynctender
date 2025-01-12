import styled, { keyframes } from "styled-components";

// Skeleton Layout
const Skeleton = () => (
	<SkeletonContainer>
		{/* Title */}
		<SkeletonTitle />

		{/* Key Highlights Section */}
		<SkeletonText />
		<SkeletonLine />
		<SkeletonLine />
		<SkeletonLine />

		{/* Bid Requirement Section */}
		<SkeletonText />
		<div
			style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
		>
			<SkeletonBullet />
			<SkeletonBullet />
			<SkeletonBullet />
			<SkeletonBullet />
		</div>

		{/* Button */}
		<SkeletonButton />
	</SkeletonContainer>
);

export default Skeleton;

// Skeleton Animation
const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

// Skeleton Container
const SkeletonContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 2rem;
	max-width: 900px;
	margin: auto;
	background: #f4f4f4;
	border-radius: 8px;
`;

// Skeleton Loader
const SkeletonLoader = styled.div`
	background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
	background-size: 400% 100%;
	animation: ${shimmer} 1.5s infinite;
	border-radius: 4px;
`;

// Skeleton Title
const SkeletonTitle = styled(SkeletonLoader)`
	height: 24px;
	width: 60%;
`;

// Skeleton Text
const SkeletonText = styled(SkeletonLoader)`
	height: 16px;
	width: 90%;
`;

// Skeleton Line
const SkeletonLine = styled(SkeletonLoader)`
	height: 16px;
	width: 70%;
`;

// Skeleton Button
const SkeletonButton = styled(SkeletonLoader)`
	height: 40px;
	width: 150px;
	border-radius: 20px;
`;

// Skeleton Bullet Points
const SkeletonBullet = styled(SkeletonLoader)`
	height: 16px;
	width: 80%;
`;
