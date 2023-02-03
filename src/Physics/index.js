import { calculateAngleBetweenRectangles, calculateAngleBetweenRectanglesByCoordinates, getAngleBetweenTwoPoints, getAngleBetweenTwoPointsDegrees, getAngleBetweenTwoPointsVector2, getAngleBetweenTwoPointsVector2Degrees } from "./calculateAngles.js";
import { calculateCircleArea, calculateCirclePerimeter, calculateRectangleArea, calculateRectanglePerimeter, calculateRectanglePerimeterByDimensions, getRectangleCenter, getRectangleCenterFromBounds, getRectangleCenterX, getRectangleCenterXFromBounds, getRectangleCenterY, getRectangleCenterYFromBounds, getRectangleVertices, getVerticesFromRectangleBounds } from "./calculateDimensions.js";
import { calculateDistanceBetweenCircles, calculateDistanceBetweenCirclesByCoordinates, calculateDistanceBetweenTwoPointObjects, calculateDistanceBetweenTwoPoints, calculateOverlapBetweenRectangles, calculateOverlapBetweenRectanglesByCoordinates } from "./calculateDistances.js";

import { topDownCarMovimentation } from "./topDownCarMovimentation.js";

/**
 * Physics lib :)
 * 
 * @namespace Physics
 */
export {
	calculateAngleBetweenRectangles, calculateAngleBetweenRectanglesByCoordinates, getAngleBetweenTwoPoints, getAngleBetweenTwoPointsDegrees, getAngleBetweenTwoPointsVector2, getAngleBetweenTwoPointsVector2Degrees,

	calculateCircleArea, calculateCirclePerimeter, calculateRectangleArea, calculateRectanglePerimeter, calculateRectanglePerimeterByDimensions, getRectangleCenter, getRectangleCenterFromBounds, getRectangleCenterX, getRectangleCenterXFromBounds, getRectangleCenterY, getRectangleCenterYFromBounds, getRectangleVertices, getVerticesFromRectangleBounds,

	calculateDistanceBetweenCircles, calculateDistanceBetweenCirclesByCoordinates, calculateDistanceBetweenTwoPointObjects, calculateDistanceBetweenTwoPoints, calculateOverlapBetweenRectangles, calculateOverlapBetweenRectanglesByCoordinates,

	topDownCarMovimentation,
};

