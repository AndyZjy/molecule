import * as React from 'react';
import { IMenuBar, MenuBarEvent } from 'mo/core/workbench/menuBar';
import { BaseProvider } from './base';
import { moleculeService } from 'mo/main';
import { cloneInstance } from 'mo/common/utils';

const initialState = cloneInstance(moleculeService.menuBar);

export const MenuBarCtx = React.createContext<IMenuBar>(initialState);

export class MenuBarProvider extends BaseProvider<any, IMenuBar> {
    state: IMenuBar;
    constructor(props) {
        super(props);
        this.register([MenuBarEvent.DataChanged]);
        this.state = initialState;
    }

    public render() {
        return (
            <MenuBarCtx.Provider
                value={this.state}>
                { this.props.children }
            </MenuBarCtx.Provider>
        );
    }
}