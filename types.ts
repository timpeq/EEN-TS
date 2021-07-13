export type EENAuth = {
  username?: string;
  password?: string;
  apiKey?: string;
  baseHost?: string;
}

export type EENUser = {
  // Items that (should) match the user object that is sent when authorized
  // #TODO: override linting rule that hates_snake_case in types file?

  last_name?: string,
  postal_code?: string,
  active_brand_subdomain?: string,
  is_edit_ptz_stations?: number,
  is_live_video?: number,
  is_distributor?: number,
  is_superuser?: number,
  is_edit_all_and_add?: number,
  is_view_location_group?: number,
  utc_offset?: number,
  street?: string[],
  is_view_shipment?: number,
  is_active?: number,
  is_edit_archive?: number,
  is_b2d2?: number,
  is_view_preview_video?: number,
  permissions?:any[],
  is_edit_location_group?: number,
  is_edit_camera_less_billing?: number,
  alternate_email?: string | null,
  access_period?: string[],
  is_edit_motion_areas?: number,
  is_pending?: number,
  is_mobile_branded?: number,
  is_edit_distributor?: number,
  is_export_video?: number,
  layouts?: string[],
  is_staff?: number,
  first_name?: string,
  is_terms_noncompliant?: number,
  state?: string | null,
  last_login?: string,
  camera_access?: [],
  notify_period?: [],
  email?: string,
  is_user_create_layout?: string,
  is_user_admin?: string,
  saved_filters?: [],
  is_view_contract?: string,
  is_view_all_accounts?: number,
  is_edit_sharing?: number,
  account_work_days?: string,
  language?: string,
  country?: string,
  is_ptz_live?: number,
  is_two_factor_authentication_enabled?: number,
  is_sms_include_picture?: number,
  is_payment?: number,
  account_map_lines?: string | null,
  is_account_superuser?: number,
  city?: string | null,
  user_id?: string,
  is_notify_enable?: string,
  owner_account_id?: string,
  temp_account_access?: [],
  json?: any,
  is_edit_map?: number,
  is_all_camera_access?: number,
  is_view_invoice?: number,
  is_view_distributor?: number,
  mobile_phone?: string | null,
  weekly_newsletter?: number,
  account_utc_offset?: number,
  phone?: string | null,
  is_edit_admin_users?: number,
  is_device_admin?: number,
  is_branded?: number,
  active_account_id?: string,
  is_edit_users?: number,
  is_master?: number,
  is_edit_all_users?: number,
  uid?: string,
  is_all_layout_access?: number,
  account_work_hours?: string[],
  active_white_label_domain?: string | null,
  is_edit_account?: number,
  timezone?: string,
  id?: string,
  is_system_notifications_disabled?: number,
  is_edit_cameras?: number,
  is_edit_plugins?: number,
  is_edit_camera_on_off?: number,
  inactive_session_timeout?: number | null,
  is_recorded_video?: number,
  user_authenticated_clients?: number | string | null,
  is_layout_admin?: number,
  is_order?: number,
  user_log_level?: number,
  is_view_archive?: number,
  sms_phone?: null,
  is_view_audit_trail?: number,
  is_view_plugins?: number,
  notify_rule?: string[],
  user_pin?: string
}