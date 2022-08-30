import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {intlShape, injectIntl, FormattedMessage} from 'react-intl';

import Box from '../box/box.jsx';
import styles from './stage-selector.css';

const StageSelector = props => {
    const {
        backdropCount,
        containerRef,
        dragOver,
        fileInputRef,
        intl,
        selected,
        raised,
        receivedBlocks,
        url,
        onBackdropFileUploadClick,
        onBackdropFileUpload,
        onClick,
        onMouseEnter,
        onMouseLeave,
        onNewBackdropClick,
        onSurpriseBackdropClick,
        onEmptyBackdropClick,
        ...componentProps
    } = props;
    return (
        <Box
            className={classNames(styles.stageSelector, {
                [styles.isSelected]: selected,
                [styles.raised]: raised || dragOver,
                [styles.receivedBlocks]: receivedBlocks
            })}
            componentRef={containerRef}
            onClick={onNewBackdropClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            {...componentProps}
        >
            {url ? (
                <img
                    className={styles.costumeCanvas}
                    src={url}
                />
            ) : null}
            <div className={styles.label}>
                <FormattedMessage
                    defaultMessage="Select a thread count"
                    description="Label for the backdrops in the stage selector"
                    id="gui.stageSelector.backdrops"
                />
            </div>
        </Box>
    );
};

StageSelector.propTypes = {
    backdropCount: PropTypes.number.isRequired,
    containerRef: PropTypes.func,
    dragOver: PropTypes.bool,
    fileInputRef: PropTypes.func,
    intl: intlShape.isRequired,
    onBackdropFileUpload: PropTypes.func,
    onBackdropFileUploadClick: PropTypes.func,
    onClick: PropTypes.func,
    onEmptyBackdropClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onNewBackdropClick: PropTypes.func,
    onSurpriseBackdropClick: PropTypes.func,
    raised: PropTypes.bool.isRequired,
    receivedBlocks: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,
    url: PropTypes.string
};

export default injectIntl(StageSelector);
