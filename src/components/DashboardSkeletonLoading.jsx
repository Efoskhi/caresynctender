import React from "react";
import styled, { keyframes } from "styled-components";

const DashboardSkeletonLoading = () => {
	return (
		<SkeletonContainer>
			<ImageSkeleton />
			<TitleSkeleton />
			<TextSkeleton />
			<TextSkeleton />
			<TextSkeleton />
		</SkeletonContainer>
	);
};

export default DashboardSkeletonLoading;


// Keyframe for shimmer effect
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

// Skeleton for the article container
const SkeletonContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px 0;
	padding: 20px;
	border-radius: 8px;
	background: #f0f0f0;
	width: 100%;
	height: auto;
`;

// Skeleton for the article title
const TitleSkeleton = styled.div`
	width: 60%;
	height: 30px;
	background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
	background-size: 200% 100%;
	animation: ${shimmer} 1.5s infinite;
	margin-bottom: 15px;
	border-radius: 4px;
`;

// Skeleton for the article text
const TextSkeleton = styled.div`
	width: 100%;
	height: 18px;
	background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
	background-size: 200% 100%;
	animation: ${shimmer} 1.5s infinite;
	margin-bottom: 10px;
	border-radius: 4px;
`;

// Skeleton for the article image
const ImageSkeleton = styled.div`
	width: 100%;
	height: 200px;
	background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
	background-size: 200% 100%;
	animation: ${shimmer} 1.5s infinite;
	margin-bottom: 20px;
	border-radius: 8px;
`;