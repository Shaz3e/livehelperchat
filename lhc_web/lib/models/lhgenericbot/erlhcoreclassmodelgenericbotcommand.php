<?php
#[\AllowDynamicProperties]
class erLhcoreClassModelGenericBotCommand {

    use erLhcoreClassDBTrait;

    public static $dbTable = 'lh_generic_bot_command';

    public static $dbTableId = 'id';

    public static $dbSessionHandler = 'erLhcoreClassGenericBot::getSession';

    public static $dbSortOrder = 'DESC';

    public static $dbDefaultSort = 'position ASC, name ASC, id DESC';


    public function getState()
    {
        $stateArray = array(
            'id' => $this->id,
            'command' => $this->command,
            'dep_id' => $this->dep_id,
            'bot_id' => $this->bot_id,
            'trigger_id' => $this->trigger_id,
            'shortcut_1' => $this->shortcut_1,
            'shortcut_2' => $this->shortcut_2,
            'sub_command' => $this->sub_command,
            'info_msg' => $this->info_msg,
            'name' => $this->name,
            'fields' => $this->fields,
            'enabled_display' => $this->enabled_display,
            'position' => $this->position,
        );

        return $stateArray;
    }

    public function __get($var) {

        switch ($var) {

            case 'bot':
                $this->bot = erLhcoreClassModelGenericBotBot::fetch($this->bot_id);
                return $this->bot;

            case 'trigger':
                $this->trigger = erLhcoreClassModelGenericBotTrigger::fetch($this->trigger_id);
                return $this->trigger;

            case 'dep':
                $this->dep = null;
                if ($this->dep_id > 0) {
                    $this->dep = erLhcoreClassModelDepartament::fetch($this->dep_id);
                }
                return $this->dep;

            case 'fields_array':
                $this->fields_array = [];
                if ($this->fields != '') {
                    $this->fields_array = json_decode($this->fields, true);
                }
                if (!is_array($this->fields_array)) {
                    $this->fields_array = [];
                }
                return $this->fields_array;

            default:
                break;
        }
    }

    public function __toString()
    {
        return $this->command;
    }

    public $id = null;
    public $command = '';
    public $dep_id = 0;
    public $bot_id = 0;
    public $trigger_id = 0;
    public $shortcut_1 = '';
    public $shortcut_2 = '';
    public $sub_command = '';
    public $info_msg = '';
    public $name = '';
    public $fields = '';
    public $enabled_display = 0;
    public $position = 0;
}