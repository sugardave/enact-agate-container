#!/usr/bin/env bash

FRAMEWORK_ROOT=/sandbox/framework

ENACT_NAMESPACE="@enact"
ENACT_LINK_NAME="enact"
ENACT_INSTALL_DIR=/sandbox/node_modules/enact
ENACT_TARGET_DIR=$FRAMEWORK_ROOT/$ENACT_LINK_NAME

AGATE_INSTALL_DIR=/sandbox/node_modules/$ENACT_NAMESPACE/agate

# make framework directory in sandbox
mkdir -p $FRAMEWORK_ROOT

# link enact into framework dir
ln -s -r -f $ENACT_INSTALL_DIR $FRAMEWORK_ROOT

# link agate into enact packages dir
ln -s -r -f $AGATE_INSTALL_DIR $FRAMEWORK_ROOT/$ENACT_LINK_NAME/packages
