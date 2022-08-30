import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {defineMessages, injectIntl, intlShape} from 'react-intl';
import VM from 'openblock-vm';

import sprites from '../lib/libraries/sprites.json';
import backdropLibraryContent from '../lib/libraries/backdrops.json';
import backdropTags from '../lib/libraries/backdrop-tags';
import LibraryComponent from '../components/library/library.jsx';

const messages = defineMessages({
    libraryTitle: {
        defaultMessage: 'Choose number of threads',
        description: 'Heading for the backdrop library',
        id: 'gui.costumeLibrary.chooseABackdrop'
    }
});

const mapStateToProps = (state) => ({
    scratchGui: state.scratchGui
});

class BackdropLibrary extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleItemSelect'
        ]);
    }
    handleItemSelect (item) {
        const vmBackdrop = {
            name: item.name,
            rotationCenterX: item.rotationCenterX,
            rotationCenterY: item.rotationCenterY,
            bitmapResolution: item.bitmapResolution,
            skinId: null
        };
        // Do not switch to stage, just add the backdrop
        this.props.vm.addBackdrop(item.md5ext, vmBackdrop)
            .then(() => {
                Object.values(this.props.scratchGui.targets.sprites).forEach((sprite) => this.props.vm.deleteSprite(sprite.id));
                item.spriteNames.forEach((spriteName) => this.props.vm.addSprite(JSON.stringify(sprites.find((sprite) => sprite.name === spriteName))));
            });
    }
    render () {
        return (
            <LibraryComponent
                data={backdropLibraryContent}
                id="backdropLibrary"
                tags={backdropTags}
                title={this.props.intl.formatMessage(messages.libraryTitle)}
                onItemSelected={this.handleItemSelect}
                onRequestClose={this.props.onRequestClose}
            />
        );
    }
}

BackdropLibrary.propTypes = {
    intl: intlShape.isRequired,
    onRequestClose: PropTypes.func,
    vm: PropTypes.instanceOf(VM).isRequired
};

export default compose(
    injectIntl,
    connect(
        mapStateToProps
    )
)(BackdropLibrary);