import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './sprite-selector-item.css';

const SpriteSelectorItem = props => (
    <div
        className={classNames(props.className, styles.spriteSelectorItem, {
            [styles.isSelected]: props.selected
        })}
        onClick={props.onClick}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        onMouseDown={() => {}}
        onTouchStart={() => {}}
        ref={props.componentRef}
    >
        {typeof props.number === 'undefined' ? null : (
            <div className={styles.number}>{props.number}</div>
        )}
        {props.costumeURL ? (
            <div className={styles.spriteImageOuter}>
                <div className={styles.spriteImageInner}>
                    <img
                        className={styles.spriteImage}
                        draggable={false}
                        src={props.costumeURL}
                    />
                </div>
            </div>
        ) : null}
        <div className={styles.spriteInfo}>
            <div className={styles.spriteName}>{props.name}</div>
            {props.details ? (
                <div className={styles.spriteDetails}>{props.details}</div>
            ) : null}
        </div>
    </div>
);

SpriteSelectorItem.propTypes = {
    className: PropTypes.string,
    componentRef: PropTypes.func,
    costumeURL: PropTypes.string,
    details: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.number,
    onClick: PropTypes.func,
    onDeleteButtonClick: PropTypes.func,
    onDuplicateButtonClick: PropTypes.func,
    onExportButtonClick: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    preventContextMenu: PropTypes.bool,
    selected: PropTypes.bool.isRequired
};

export default SpriteSelectorItem;
