﻿Type.registerNamespace("PowerTools.Commands");

PowerTools.Commands.CountItems = function ()
{
    Type.enableInterface(this, "PowerTools.Commands.CountItems");
    this.addInterface("PowerTools.BaseCommand", ["CountItems"]);
};

PowerTools.Commands.CountItems.prototype._execute = function (selection)
{
    var itemId = this._selectedItem(selection);
    var popUpUrl = $ptUtils.expandPath("/PowerTools/Client/CountItems/CountItems.aspx") + "#orgItemId=" + itemId;
    var popup = $popup.create(popUpUrl, "toolbar=no,width=600px,height=400px,resizable=false,scrollbars=false", null);
    popup.open();
};

PowerTools.Commands.CountItems.prototype._selectedItem = function (selection)
{
    switch (selection.getCount())
    {
        case 0: // check the Tree selection
            var treeView = $controls.getControl($("#DashboardTree"), "Tridion.Controls.FilteredTree");
            return treeView.getSelection().getItem(0);
            break;

        case 1: // multiple items selected in the main list
            return selection.getItem(0);
            break;

        default:
            return null;
            break;
    }
}

PowerTools.Commands.CountItems.prototype.isValidSelection = function(selection)
{
    var item = this._selectedItem(selection);
    if (item != null)
    {
        switch ($models.getItemType(item))
        {
            case $const.ItemType.FOLDER:
            case $const.ItemType.PUBLICATION:
            case $const.ItemType.STRUCTURE_GROUP:
            case $const.ItemType.CATEGORY:
            case $const.ItemType.CATMAN:
                return true;
                break;
        }
    }

    return false;
}