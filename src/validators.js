import { NAV_ITEMS, MIDNIGHT_HOUR, HOURS_IN_DAY } from './constants'

export function isPageValid(page) {
    return Object.keys(NAV_ITEMS).includes(page)
};

export function validateTimelineItems(timelineItems) {
    return timelineItems.every(isTimelineItemValid)
}

export function isTimelineItemValid({ hour }) {
    return isHourValid(hour)
};

export function validateSelectOptions(options) {
    return options.every(isSelectOptionValid)
};

export function isUnderfinedOrNull(value) {
    return isUnderfined(value) || isNull(value)
};

export function isNumberOrNull(value) {
    return isNumber(value) || isNull(value)
};

function isSelectOptionValid({ value, label }) {
    return isNumber(value) && isString(label)
};

function isNumber(value) {
    return typeof value === 'number'
}

function isString(value) {
    return typeof value === 'string'
}

function isUnderfined(value) {
    return value === undefined
}

function isNull(value) {
    return value === null
}

function isBetween(value, start, end) {
    return value >= start && value <= end
}

function isHourValid(hour) {
    return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}