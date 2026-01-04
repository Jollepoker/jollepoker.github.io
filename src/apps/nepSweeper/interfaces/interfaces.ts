import type { Dayjs } from 'dayjs';

export interface NepSweeperData {
    xLength: number;
    yLength: number;
    mines: number;
    hiddenBoard: string[];
    shownBoard: string[];
    hiddenTiles: number;
    minesLeft: number;
    firstClick: boolean;
    firstClickTime?: Dayjs;
    timeInterval?: number;
    secondsSinceStart: number;
    mouseHoverTile?: number;
    markedHitMine: boolean;
    gameLost: boolean;
    gameOver: boolean;
    leftPressed: boolean;
    rightPressed: boolean;
    ctrlPressed: boolean;
    currentDifficulty: string;
    currentSpriteSheet: string;
    currentZoomLevel: string;
    currentZoomScale: number;
    currentSpriteSheetZoomScale: number;
    difficulties: NepSweeperDifficulty[];
    spriteSheets: NepSweeperSpriteSheet[];
    zoomLevels: NepSweeperZoomLevel[];
    translateZoomToScale: Map<number, number>;
    leaderBoardOpen: boolean;
    masterButtonClass: string;
}

export interface NepSweeperDifficulty {
    name: string;
    x: number;
    y: number;
    mines: number;
}

export interface NepSweeperSpriteSheet {
    name: string;
    background: string;
    sprites: Map<number, string>;
}
export interface NepSweeperZoomLevel {
    name: string;
    scale: number;
    minMedia: string;
}

export interface NepSweeperScoreObject {
    time: number;
    date: string;
}
