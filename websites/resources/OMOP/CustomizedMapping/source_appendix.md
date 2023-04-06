# Appendix: source tables

### Table: encounters_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1020 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10590_m_15 |  |
| encounter_deiden_id | VARCHAR |  |  |
| payer | VARCHAR |  |  |
| encounter_effective_date | DATE | 2020-03-26 |  |
| merged_admit_datetime | VARCHAR |  |  |
| admit_datetime | VARCHAR |  |  |
| merged_dischg_datetime | VARCHAR |  |  |
| dischg_datetime | VARCHAR |  |  |
| death_date | DATE |  |  |
| smoking_status | VARCHAR | Status Unknown |  |
| language | VARCHAR | ENGLISH |  |
| encounter_type | VARCHAR | APPOINTMENT |  |
| patient_type | VARCHAR |  |  |
| external_name | VARCHAR |  |  |
| hospital | VARCHAR | JAX |  |
| location_of_svc | VARCHAR | JP V ALLSCRIPTS CONV |  |
| attending_dr_deiden_id | INT | 17791 |  |
| admit_source | VARCHAR |  |  |
| country | VARCHAR | United States of America |  |
| dischg_disposition | VARCHAR |  |  |
| sex | VARCHAR | FEMALE |  |
| race | VARCHAR | WHITE |  |
| ethnicity | VARCHAR | NOT HISPANIC |  |
| birth_date | DATE | 1974-08-09 |  |
| county | VARCHAR | Duval |  |
| city | VARCHAR | Jacksonville |  |
| zip | INT | 32218 |  |
| ed_arrival_datetime | VARCHAR |  |  |
| marital_status | VARCHAR | MARRIED |  |
| isdead_y_n | VARCHAR | N |  |
| appointment_status | VARCHAR |  |  |
| hosp_svc_dept | VARCHAR | Other |  |
| hosp_svc_desc | VARCHAR | Unknown |  |
| state | VARCHAR | FL |  |
| icd9_admit_diagnosis | VARCHAR |  |  |
| icd9_admit_diagnosis_desc | VARCHAR |  |  |
| icd9_admit_diagnosis_group | VARCHAR |  |  |
| icd10_admit_diagnosis | VARCHAR |  |  |
| icd10_admit_diagnosis_desc | VARCHAR |  |  |
| icd10_admit_diagnosis_group | VARCHAR |  |  |
| admit_priority | VARCHAR |  |  |
| seen_in_ed_y_n | VARCHAR |  |  |
| dischg_svc_dept_ip_obs | VARCHAR |  |  |
| dischg_svc_desc_ip_obs | VARCHAR |  |  |
| death_indicator | VARCHAR |   |  |
| aids | REAL |  |  |
| cancer | REAL |  |  |
| cerebrovascular_disease | REAL |  |  |
| chf | REAL |  |  |
| copd | REAL |  |  |
| dementia | REAL |  |  |
| diabetes_w_o_complications | REAL |  |  |
| diabetes_w_complications | REAL |  |  |
| m_i | REAL |  |  |
| metastatic_carcinoma | REAL |  |  |
| mild_liver_disease | REAL |  |  |
| moderate_severe_liver_disease | REAL |  |  |
| paraplegia_hemiplegia | REAL |  |  |
| peptic_ulcer_disease | REAL |  |  |
| peripheral_vascular_disease | REAL |  |  |
| renal_disease | REAL |  |  |
| rheumatologic_disease | REAL |  |  |
| aids_poa | REAL |  |  |
| cancer_poa | REAL |  |  |
| cerebrovascular_poa | REAL |  |  |
| chf_poa | REAL |  |  |
| copd_poa | REAL |  |  |
| dementia_poa | REAL |  |  |
| diabetes_w_o_complications_poa | REAL |  |  |
| diabetes_w_complications_poa | REAL |  |  |
| m_i_poa | REAL |  |  |
| metastatic_carcinoma_poa | REAL |  |  |
| mild_liver_disease_poa | REAL |  |  |
| moderate_severe_liver_disease_poa | REAL |  |  |
| paraplegia_hemiplegia_poa | REAL |  |  |
| peptic_ulcer_disease_poa | REAL |  |  |
| peripheral_vascular_disease_poa | REAL |  |  |
| renal_disease_poa | REAL |  |  |
| rheumatologic_poa | REAL |  |  |
| charlson_comorbidity_total_score | REAL |  |  |
| height_cm | VARCHAR |  |  |
| weight_kgs | VARCHAR |  |  |
| ed_dischg_datetime_first | VARCHAR |  |  |
| referring_dr_deiden_id | INT | 17945 |  |
| primary_enc_yn | VARCHAR |  |  |
| ed_dischg_datetime_all | VARCHAR |  |  |

### Table: ssdi2_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR |  |  |
| ssdi_death_date | DATE |  |  |
| death_censor_date | DATE | 2021-05-01 | This is the date that records the date when the last time death date was checked |
| ssdi_death_indicator | VARCHAR | N |  |

### Table: internal_stations_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1001 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_1018_m_12 |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10636_22294 |  |
| batch_visit_detail_id | INT |  |  |
| enter_datetime | VARCHAR | 2015-07-21 09:39:00 |  |
| exit_datetime | VARCHAR | 2015-07-21 09:39:01 |  |
| hospital | VARCHAR | JAX |  |
| location_type | VARCHAR | OR |  |
| at_station | VARCHAR | JX EMERGENCY DEPARTMENT CC |  |
| from_station | VARCHAR |  |  |
| at_accommodation_level | VARCHAR | SEMI PRIVATE |  |
| at_accommodation_type | VARCHAR | ACUTE |  |
| at_attending_provider_service | EMPTY |  |  |
| to_station | VARCHAR |  |  |
| at_bed | VARCHAR |  |  |
| at_department | VARCHAR | Medicine |  |
| at_patient_type | VARCHAR | INPATIENT |  |
| at_room | VARCHAR |  |  |
| at_service | VARCHAR | Emergency Services |  |
| at_station_class | VARCHAR |  |  |
| at_station_imc_icu_description | VARCHAR | Not a UF ICU/IMC |  |
| at_station_tower | VARCHAR | NON-SUF Station |  |
| at_station_type | VARCHAR |  |  |
| from_accommodation_level | VARCHAR |  |  |
| from_accommodation_type | VARCHAR |  |  |
| from_attending_provider_service | EMPTY |  |  |
| from_bed | VARCHAR |  |  |
| from_department | VARCHAR |  |  |
| from_patient_type | VARCHAR |  |  |
| from_room | VARCHAR |  |  |
| from_service | VARCHAR |  |  |
| from_station_class | VARCHAR |  |  |
| from_station_imc_icu_description | VARCHAR | Not a UF ICU/IMC |  |
| from_station_tower | VARCHAR |  |  |
| from_station_type | VARCHAR |  |  |
| outpatient_at_station | VARCHAR |  |  |
| outpatient_from_station | VARCHAR |  |  |
| outpatient_to_station | VARCHAR |  |  |
| to_accommodation_level | VARCHAR |  |  |
| to_accommodation_type | VARCHAR |  |  |
| to_attending_provider_service | VARCHAR |  |  |
| to_bed | VARCHAR |  |  |
| to_department | VARCHAR |  |  |
| to_patient_type | VARCHAR |  |  |
| to_room | VARCHAR |  |  |
| to_service | VARCHAR |  |  |
| to_station_class | VARCHAR |  |  |
| to_station_imc_icu_description | VARCHAR |  |  |
| to_station_tower | VARCHAR |  |  |
| to_station_type | VARCHAR |  |  |
| exit_imputed_disch | REAL | 0.0 |  |
| problem_detected | REAL | 0.0 |  |
| exit_imputed_self | REAL | 0.0 |  |
| enter_imputed_admission | REAL |  |  |
| or_case_num | VARCHAR |  |  |

### Table: morse_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10002 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10939_m_12 |  |
| batch_visit_detail_id | INT |  |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10946_93028 |  |
| morse_datetime | VARCHAR | 2016-05-08 08:00:00 |  |
| measurement_name | VARCHAR | morse_ambulatory_aids |  |
| measurement_value | VARCHAR | 0.0 |  |
| intraop_y_n | VARCHAR | N |  |

### Table: blood_pressure_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10931 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_1018_m_12 |  |
| batch_visit_detail_id | INT | 5690 |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10686_23443 |  |
| bp_datetime | VARCHAR | 2016-09-02 16:00:00 |  |
| bp_location | VARCHAR |  |  |
| patient_position | VARCHAR |  |  |
| invasive_bp_source_value | VARCHAR |  |  |
| invasive_map_source_value | REAL |  |  |
| noninvasive_bp_source_value | VARCHAR |  |  |
| noninvasive_map_source_value | REAL |  |  |
| cvp | REAL |  |  |
| cvp_mean | REAL |  |  |
| pap_mean | REAL |  |  |
| invasive_systolic | REAL |  |  |
| invasive_diastolic | REAL |  |  |
| invasive_map | REAL |  |  |
| noninvasive_systolic | REAL |  |  |
| noninvasive_diastolic | REAL |  |  |
| noninvasive_map | REAL |  |  |
| invasive_bp_method | VARCHAR |  |  |
| noninvasive_bp_method | VARCHAR | Unspecified Non Invasive |  |
| imputed_invasive_systolic | REAL |  |  |
| imputed_invasive_diastolic | REAL |  |  |
| imputed_invasive_map | REAL |  |  |
| imputed_noninvasive_systolic | REAL | 0.0 |  |
| imputed_noninvasive_diastolic | REAL | 0.0 |  |
| imputed_noninvasive_map | REAL | 0.0 |  |

### Table: rass_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1018 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_1018_m_12 |  |
| batch_visit_detail_id | INT |  |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_1018_3021 |  |
| recorded_time | VARCHAR | 2019-04-01 08:00:00 |  |
| vital_sign_measure_name | VARCHAR | R SH IP UF RASS SEDATION SCALE |  |
| meas_value | REAL | 0.0 |  |
| intraop_y_n | VARCHAR | N |  |

### Table: dialysis_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10021 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10021_m_1 |  |
| batch_visit_detail_id | INT | 600 |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10021_22276 |  |
| observation_datetime | VARCHAR | 2019-03-24 00:00:00 |  |
| vital_sign_measure_name | VARCHAR | Prescribed net fluid removal (C) |  |
| meas_value | VARCHAR | 0 |  |
| vital_sign_group_name | VARCHAR | Hourly Net Balance |  |
| intraop_y_n | VARCHAR | N |  |

### Table: realm_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1001 |  |
| merged_enc_id | VARCHAR |  |  |
| batch_visit_detail_id | INT |  |  |
| encounter_deiden_id | VARCHAR |  |  |
| realm_datetime | VARCHAR |  |  |
| health_literacy_assessment | VARCHAR | Adequate |  |
| intraop_y_n | VARCHAR | N |  |

### Table: asa_scores_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10394 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10599_m_1 |  |
| batch_visit_detail_id | INT |  |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10636_22294 |  |
| asa_date | DATE | 2019-02-18 |  |
| asa_score | VARCHAR | SEVERE SYSTEMIC DISEASE |  |
| intraop_y_n | VARCHAR | N |  |

### Table: pain_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10002 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10939_m_12 |  |
| batch_visit_detail_id | INT |  |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10939_93889 |  |
| pain_datetime | VARCHAR | 2016-05-08 12:00:00 |  |
| measurement_name | VARCHAR | pain_jax |  |
| measurement_value | VARCHAR | 0 |  |
| intraop_y_n | VARCHAR | N | Not mapped, visit detail id is used instead to identify surgeries |

### Table: cam_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1018 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_1018_m_12 |  |
| batch_visit_detail_id | INT | 5690 |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10324_23246 |  |
| recorded_time | VARCHAR | 2019-05-14 20:00:00 |  |
| vital_sign_measure_name | VARCHAR | R PALLIATIVE (CAM) SCORE |  |
| meas_value | VARCHAR | Negative |  |
| disp_name | VARCHAR | CAM Screening Results | measure name used instead |
| intraop_y_n | VARCHAR | N | Not mapped, use visit detail id instead to identify operations |

### Table: braden_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10002 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10939_m_12 |  |
| batch_visit_detail_id | INT |  |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10686_23443 |  |
| braden_datetime | VARCHAR | 2016-05-08 08:00:00 |  |
| measurement_name | VARCHAR | braden_moisture |  |
| measurement_value | INT | 3 |  |
| intraop_y_n | VARCHAR | N |  |

### Table: mobility_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10939 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10939_m_12 |  |
| batch_visit_detail_id | INT |  |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10939_93889 |  |
| recorded_time | VARCHAR | 2016-05-08 08:00:00 |  |
| measure_name | VARCHAR | activity |  |
| meas_value | VARCHAR | Repositioned/turned in bed |  |

### Table: glasgow_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10686 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10686_m_9 |  |
| batch_visit_detail_id | INT |  |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10686_23443 |  |
| glasgow_coma_datetime | VARCHAR | 2016-05-09 04:00:00 |  |
| measurement_name | VARCHAR | glasgow_coma_adult_eye_opening |  |
| measurement_value | VARCHAR | 4 |  |
| intraop_y_n | VARCHAR | N |  |

### Table: mews_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1001 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_1018_m_12 |  |
| batch_visit_detail_id | INT |  |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_1018_28674 |  |
| recorded_time | VARCHAR | 2017-09-05 04:00:00 |  |
| disp_name | VARCHAR |  MEWS - Sepsis Recognition Score  |  |
| meas_value | REAL | 1.0 |  |
| intraop_y_n | VARCHAR | N |  |

### Table: sofa_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1018 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_1018_m_12 |  |
| batch_visit_detail_id | INT | 3297 |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_1018_912535 |  |
| date_of_care | DATE | 2019-08-30 |  |
| respiration | INT | 3 |  |
| cns | INT | 3 |  |
| cardiovascular | INT | 1 |  |
| liver | INT | 0 |  |
| coagulation | INT | 0 |  |
| renal | INT | 0 |  |
| sofa_score | INT | 9 |  |
| intraop_y_n | VARCHAR | N |  |

### Table: temperature_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10636 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10021_m_1 |  |
| batch_visit_detail_id | INT | 10190 |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10021_22276 |  |
| vitals_datetime | VARCHAR | 2016-01-15 08:35:00 |  |
| intraop_y_n | VARCHAR | Y |  |
| temp_source | VARCHAR |  |  |
| temp_source_value | REAL | 98.1 |  |
| temp_source_unit | VARCHAR | Farenheit |  |
| temp_celsius | REAL | 36.72222222222222 |  |
| clean_core_body_temp_celsius | REAL | 37.27777777777778 |  |

### Table: anesthesia_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10636 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10021_m_1 |  |
| batch_visit_detail_id | INT |  |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10021_22276 |  |
| anesthesia_datetime | VARCHAR |  |  |
| bis_index | REAL | 41.0 |  |
| intraop_y_n | VARCHAR | Y |  |

### Table: heart_rate_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10021 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10021_m_1 |  |
| batch_visit_detail_id | INT | 660 |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10021_22276 |  |
| vitals_datetime | VARCHAR | 2016-01-15 08:35:00 |  |
| heart_rate_source | VARCHAR |  |  |
| heart_rate | INT | 80 |  |
| intraop_y_n | VARCHAR | Y |  |

### Table: height_weight_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10205 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10637_m_10 |  |
| batch_visit_detail_id | INT |  |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10578_28307 |  |
| height_weight_datetime | VARCHAR | 2019-12-09 07:00:00 |  |
| measurement_value | REAL | 157.47999572753906 |  |
| measurement_name | VARCHAR | weight_kgs |  |
| intraop_y_n | VARCHAR | N |  |

### Table: mac_components_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10636 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10021_m_1 |  |
| batch_visit_detail_id | INT |  |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10068_861390 |  |
| recorded_time | VARCHAR | 2019-03-25 11:43:00 |  |
| meas_value | REAL | 0.0 |  |
| disp_name | VARCHAR | age_ajusted_mac |  |

### Table: intake_outtake_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1018 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_1018_m_12 |  |
| batch_visit_detail_id | INT |  |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10021_22276 |  |
| i_o_datetime | VARCHAR | 2016-01-15 04:00:00 |  |
| measurement_value | REAL | 0.0 |  |
| measurement_name | VARCHAR | urine_output |  |
| intraop_y_n | VARCHAR | N |  |

### Table: q1_sofa_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10002 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10939_m_12 |  |
| batch_visit_detail_id | INT |  |  |
| time | VARCHAR | 2016-02-11 12:38:00 |  |
| glasgow_coma_adult_score | REAL | 15.0 |  |
| map_value | REAL |  |  |
| cardio | REAL | 0.0 |  |
| pf | REAL |  |  |
| bilirubin | REAL |  |  |
| platelets | REAL |  |  |
| creatinine | REAL |  |  |
| spf | EMPTY |  |  |
| dopamine | REAL |  |  |
| resp | REAL | 0.0 |  |
| coag | REAL | 0.0 |  |
| sofa_score | REAL | 0.0 |  |
| liver | REAL | 0.0 |  |
| renal | REAL | 0.0 |  |
| cns | REAL | 0.0 |  |
| dobutamine | EMPTY |  |  |
| norepinephrine | REAL |  |  |
| epinephrine | REAL |  |  |
| vasopressin | EMPTY |  |  |
| phenylephrine | REAL |  |  |
| mv | REAL |  |  |
| stay_id | INT | 0 |  |
| intraop_y_n | VARCHAR | N |  |

### Table: diagnoses_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1001 |  |
| merged_enc_id | VARCHAR |  |  |
| encounter_deiden_id | VARCHAR |  |  |
| diag_icd_type | VARCHAR | ICD10 |  |
| diag_code | VARCHAR | I10 |  |
| start_date | DATE | 2019-04-30 |  |
| end_date | EMPTY |  |  |
| diag_hierarchy | VARCHAR | Essential (primary) hypertension |  |
| poa | INT | 0 |  |
| imputed_poa | INT | 0 |  |
| sequence_number | INT | 2 |  |
| problem_list_status | EMPTY |  |  |
| diagnosis_type | VARCHAR | pro_billing |  |

### Table: 60_ecg_cardiology_detail_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1001 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10122_m_29 |  |
| batch_visit_detail_id | INT |  |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10122_22871 |  |
| ecg_acq_date | DATE | 2019-04-02 |  |
| ecg_acq_time | INT | 1051 |  |
| ecg_patnt_age | REAL | 0.0 |  |
| heart_rate | REAL | 74.0 |  |
| i40_frontal_axis | REAL |  |  |
| i40_horizontal_axis | REAL |  |  |
| pr_interval | REAL |  |  |
| p_frontal_axis | REAL |  |  |
| p_horizontal_axis | REAL |  |  |
| qrs_duration | REAL | 90.0 |  |
| qrs_frontal_axis | INT | 40 |  |
| qrs_horizontal_axis | REAL |  |  |
| qtcb | REAL | 441.0 |  |
| qt_interval | REAL | 396.0 |  |
| st_frontal_axis | REAL | 62.0 |  |
| st_horizontal_axis | REAL |  |  |
| t40_frontal_axis | REAL | 35.0 |  |
| t40_horizontal_axis | REAL |  |  |
| t_frontal_axis | REAL | 63.0 |  |
| t_horizontal_axis | REAL |  |  |
| ecg_institution | VARCHAR | Shands Hospital (Main) |  |
| ecg_facility | VARCHAR | Adult ECG |  |
| ecg_department | VARCHAR | ER |  |
| ecg_acq_datetime | VARCHAR |  |  |
| intraop_y_n | VARCHAR | N |  |

### Table: procedures_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1001 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_1001_30145 |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_1001_30145 |  |
| batch_visit_detail_id | INT |  |  |
| proc_date | DATE | 2019-03-13 |  |
| proc_code | VARCHAR | 85025 |  |
| proc_code_type | VARCHAR | CPT |  |
| source | VARCHAR | Professional |  |
| proc_dr_deiden_id | REAL | 24839.0 |  |
| proc_desc | VARCHAR | CHG COMPLETE CBC & AUTO DIFF WBC |  |
| intraop_y_n | VARCHAR | N |  |

### Table: lab_notes_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10279 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10050_m_5 |  |
| batch_visit_detail_id | INT |  |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10050_22535 |  |
| note_datetime | VARCHAR | 2021-04-22 13:46:00 |  |
| note_title | VARCHAR | DIFF COMMENT|LAB293|58445-8 |  |
| lab_result | TEXT | the |  |

### Table: meds_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| row_id | INT |  | Auto Increment |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10002 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10686_m_9 |  |
| batch_visit_detail_id | INT |  |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10686_23443 |  |
| rxnorm_concat | VARCHAR |  |  |
| med_order_desc | VARCHAR | HEPARIN SODIUM (PORCINE) 5000 UNIT/ML IJ SOLN |  |
| med_dose_unit_desc | VARCHAR | mg |  |
| taken_datetime | VARCHAR | 2016-10-26 18:15:33 |  |
| med_infusion_rate | REAL |  |  |
| med_order_refills | REAL |  |  |
| total_dose_character | REAL | 0 |  |
| med_order_route | VARCHAR | ORAL |  |
| med_order_discrete_dose_unit | VARCHAR | mg |  |
| med_order_num | VARCHAR | IDEALIST_2021-05-01_10324_23246_4097352 |  |
| mar_action | VARCHAR | GIVEN |  |
| mar_comment | EMPTY |  |  |
| med_names_concat | VARCHAR | | HEPARIN SODIUM (PORCINE) 5000 UNIT/ML IJ SOLN | |  |
| meds_simple_generic_names_concat | VARCHAR | | Heparin Sodium (Porcine) | |  |
| med_generic_name_strength_concat | VARCHAR |  |  |
| med_name_strength_concat | VARCHAR |  |  |
| med_therapy_class_concat | VARCHAR | | ANALGESICS & ANESTHETICS | |  |
| pharmacy_class_concat | VARCHAR | | ANALGESICS-NARCOTIC | |  |
| pharmacy_subclass_concat | VARCHAR | | OPIOID AGONISTS | |  |
| ambulatory_prescribed_y_n | VARCHAR | N |  |
| anes_ordered_med_y_n | VARCHAR | N |  |
| historical_med_y_n | VARCHAR | N |  |
| med_duration_desc | VARCHAR |  |  |
| med_duration_unit_desc | VARCHAR |  |  |
| med_infusion_rate_unit_desc | VARCHAR |  |  |
| med_order_datetime | VARCHAR | 2015-05-21 01:23:00 |  |
| med_order_discontinue_date | VARCHAR |  |  |
| med_order_discrete_disp_unit | EMPTY |  |  |
| med_order_discrete_dispense_qty | EMPTY |  |  |
| med_order_discrete_dose | VARCHAR |  |  |
| med_order_display_name | VARCHAR | insulin aspart (NovoLOG) injection |  |
| med_order_end_datetime | VARCHAR | 2016-03-09 12:41:00 |  |
| med_order_freq_desc | VARCHAR | DAILY |  |
| med_order_qty | EMPTY |  |  |
| med_order_refills_remaining | REAL | 0.0 |  |
| med_order_start_datetime | VARCHAR | 2016-03-18 09:00:00 |  |
| med_order_status | VARCHAR | DISCONTINUED |  |
| end_datetime | VARCHAR |  |  |
| imputed_dose | REAL | 0.0 |  |
| imputed_fluid_bolus | INT | 0 |  |
| volume_conversion_factor | REAL |  |  |
| fluid_volume | REAL |  |  |
| fluid_volume_unit | VARCHAR |  |  |
| imputed_from_mar_comment | INT | 0 |  |
| original_total_dose_character | REAL | 1.0 |  |
| original_med_dose_unit_desc | VARCHAR | mg |  |
| verbatim_end_datetime | VARCHAR |  |  |
| med_dosing_weight | REAL | 72.57472 |  |
| imputed_weight | REAL | 1.0 |  |
| med_order_dose_min | REAL |  |  |
| med_order_dose_max | REAL |  |  |
| pressor_name | VARCHAR |  |  |
| iv_class | VARCHAR |  |  |

### Table: 47_or_case_schedule_encounters_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| case_status | VARCHAR | Completed |  |
| case_class | VARCHAR |  |  |
| sched_location | VARCHAR | JAX |  |
| sched_north_south | VARCHAR | Other |  |
| sched_site | VARCHAR | JAX |  |
| sched_site_description | VARCHAR | Shands Jax |  |
| sched_service | VARCHAR | Orthopaedics |  |
| sched_room | VARCHAR | JAX CATH-01 |  |
| sched_room_type | VARCHAR | Main OR - JAX |  |
| sched_trauma_room_yn | VARCHAR | N |  |
| sched_surg_service | VARCHAR |  |  |
| sched_patient_class_code | VARCHAR | HOSPITAL AMBULATORY SURGERY |  |
| sched_anesthesia_type | VARCHAR | General |  |
| sched_post_op_location | VARCHAR |  |  |
| sched_case_date | VARCHAR | 2019-02-13 00:00:00 |  |
| sched_start_datetime | VARCHAR |  |  |
| sched_start_time_char | INT | 800 |  |
| sched_stop_time_char | INT | 1100 |  |
| sched_base_procedure_1 | VARCHAR | LEFT HEART CATHETERIZATION |  |
| sched_base_procedure_code_1 | VARCHAR | 500871 |  |
| sched_cpt_1 | VARCHAR |  |  |
| sched_cpt_1_description | VARCHAR | NOT INCLUDED IN ORIGINAL SOURCE |  |
| sched_base_procedure_2 | VARCHAR |  |  |
| sched_base_procedure_code_2 | VARCHAR |  |  |
| sched_cpt_2 | VARCHAR |  |  |
| sched_cpt_2_description | VARCHAR |  |  |
| sched_base_procedure_3 | VARCHAR |  |  |
| sched_base_procedure_code_3 | REAL |  |  |
| sched_cpt_3 | VARCHAR |  |  |
| sched_cpt_3_description | VARCHAR |  |  |
| sched_base_procedure_4 | VARCHAR |  |  |
| sched_base_procedure_code_4 | REAL |  |  |
| sched_cpt_4 | INT |  |  |
| sched_cpt_4_description | VARCHAR |  |  |
| sched_base_procedure_5 | VARCHAR |  |  |
| sched_base_procedure_code_5 | REAL |  |  |
| sched_cpt_5 | REAL |  |  |
| sched_cpt_5_description | VARCHAR |  |  |
| sched_base_procedure_6 | VARCHAR |  |  |
| sched_base_procedure_code_6 | REAL |  |  |
| sched_cpt_6 | REAL |  |  |
| sched_cpt_6_description | VARCHAR |  |  |
| sched_base_procedure_7 | VARCHAR |  |  |
| sched_base_procedure_code_7 | REAL |  |  |
| sched_cpt_7 | REAL |  |  |
| sched_cpt_7_description | VARCHAR |  |  |
| sched_base_procedure_8 | VARCHAR |  |  |
| sched_base_procedure_code_8 | REAL |  |  |
| sched_cpt_8 | REAL |  |  |
| sched_cpt_8_description | VARCHAR |  |  |
| sched_base_procedure_9 | VARCHAR |  |  |
| sched_base_procedure_code_9 | REAL |  |  |
| sched_cpt_9 | REAL |  |  |
| sched_cpt_9_description | VARCHAR |  |  |
| sched_base_procedure_10 | VARCHAR |  |  |
| sched_base_procedure_code_10 | REAL |  |  |
| sched_cpt_10 | REAL |  |  |
| sched_cpt_10_description | VARCHAR |  |  |
| room_start_datetime | VARCHAR |  |  |
| room_end_datetime | VARCHAR |  |  |
| incision_datetime | VARCHAR |  |  |
| dressing_datetime | VARCHAR |  |  |
| anesthesia_start_datetime | VARCHAR |  |  |
| anesthesia_stop_datetime | VARCHAR |  |  |
| base_procedure_1 | VARCHAR |  |  |
| base_procedure_code_1 | VARCHAR |  |  |
| cpt_1 | VARCHAR |  |  |
| cpt_1_description | VARCHAR | NOT INCLUDED IN ORIGINAL SOURCE |  |
| base_procedure_2 | VARCHAR |  |  |
| base_procedure_code_2 | REAL |  |  |
| cpt_2 | VARCHAR |  |  |
| cpt_2_description | VARCHAR |  |  |
| base_procedure_3 | VARCHAR |  |  |
| base_procedure_code_3 | REAL |  |  |
| cpt_3 | INT |  |  |
| cpt_3_description | VARCHAR |  |  |
| base_procedure_4 | VARCHAR |  |  |
| base_procedure_code_4 | REAL |  |  |
| cpt_4 | INT |  |  |
| cpt_4_description | VARCHAR |  |  |
| base_procedure_5 | VARCHAR |  |  |
| base_procedure_code_5 | REAL |  |  |
| cpt_5 | REAL |  |  |
| cpt_5_description | VARCHAR |  |  |
| base_procedure_6 | VARCHAR |  |  |
| base_procedure_code_6 | REAL |  |  |
| cpt_6 | REAL |  |  |
| cpt_6_description | VARCHAR |  |  |
| base_procedure_7 | VARCHAR |  |  |
| base_procedure_code_7 | REAL |  |  |
| cpt_7 | REAL |  |  |
| cpt_7_description | VARCHAR |  |  |
| base_procedure_8 | VARCHAR |  |  |
| base_procedure_code_8 | REAL |  |  |
| cpt_8 | REAL |  |  |
| cpt_8_description | VARCHAR |  |  |
| base_procedure_9 | VARCHAR |  |  |
| base_procedure_code_9 | REAL |  |  |
| cpt_9 | REAL |  |  |
| cpt_9_description | VARCHAR |  |  |
| base_procedure_10 | VARCHAR |  |  |
| base_procedure_code_10 | REAL |  |  |
| cpt_10 | REAL |  |  |
| cpt_10_description | VARCHAR |  |  |
| service | VARCHAR | Orthopaedics |  |
| surgery_type | VARCHAR | ELECTIVE |  |
| location | VARCHAR | JAX |  |
| site | VARCHAR | JAX |  |
| site_description | VARCHAR | Shands Jax |  |
| room_type | VARCHAR | Main OR - JAX |  |
| nora_yn | VARCHAR | N |  |
| gi_room_yn | VARCHAR | N |  |
| case_date | DATE | 2019-02-13 |  |
| anesthesia_type | VARCHAR | General |  |
| nerve_block_yn | VARCHAR | N |  |
| ready_for_or_datetime | VARCHAR |  |  |
| pre_op_begin_datetime | VARCHAR |  |  |
| pre_op_end_datetime | VARCHAR |  |  |
| procedure_start_datetime | VARCHAR |  |  |
| begin_to_close_datetime | VARCHAR |  |  |
| procedure_end_datetime | VARCHAR |  |  |
| procedural_care_complete_datetime | VARCHAR |  |  |
| anesthesia_ready_datetime | VARCHAR |  |  |
| anesthesia_arrival_datetime | EMPTY |  |  |
| anesthesia_block_start_datetime | VARCHAR |  |  |
| anesthesia_block_stop_datetime | VARCHAR |  |  |
| pacu_start_datetime | VARCHAR |  |  |
| surgeon_in_datetime | VARCHAR |  |  |
| surgeon_out_datetime | VARCHAR |  |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10122 |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10599_23239 |  |
| or_case_num | VARCHAR |  |  |
| sched_surgeon_dr_deiden_id | INT | 17791 |  |
| main_surgeon_dr_deiden_id | REAL | 15330.0 |  |
| main_anesthesiologist_dr_deiden_id | REAL | 17791.0 |  |
| surgery_start_datetime | VARCHAR |  |  |
| surgery_stop_datetime | VARCHAR |  |  |
| imputed_surgery_start | REAL | 1.0 |  |
| imputed_surgery_stop | REAL | 1.0 |  |
| sched_post_op_location_type | VARCHAR |  |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10599_m_1 |  |
| hospital | VARCHAR | JAX |  |
| encounter_effective_date | DATE | 2016-05-04 |  |
| admit_datetime | VARCHAR | 2016-02-15 08:38:00 |  |
| admit_source | VARCHAR | NON HEALTHCARE FACILITY |  |
| dischg_datetime | VARCHAR |  |  |
| sex | VARCHAR | FEMALE |  |
| race | VARCHAR | WHITE |  |
| ethnicity | VARCHAR | NOT HISPANIC |  |
| language | VARCHAR | ENGLISH |  |
| city | VARCHAR | Jacksonville |  |
| country | VARCHAR | United States of America |  |
| zip | INT | 32209 |  |
| state | VARCHAR | FL |  |
| county | VARCHAR | Duval |  |
| marital_status | VARCHAR | MARRIED |  |
| ed_arrival_datetime | VARCHAR |  |  |
| isdead_y_n | VARCHAR | N |  |
| encounter_type | VARCHAR | HOSPITAL ENCOUNTER |  |
| appointment_status | VARCHAR |  |  |
| patient_type | VARCHAR | AMBULATORY SURGERY |  |
| hosp_svc_dept | VARCHAR | Medicine |  |
| hosp_svc_desc | VARCHAR | Orthopaedics |  |
| location_of_svc | VARCHAR | UF FSC |  |
| external_name | VARCHAR | UF FLORIDA SURGICAL CENTER |  |
| birth_date | DATE | 1966-12-15 |  |
| payer | VARCHAR | Medicare |  |
| icd9_admit_diagnosis | VARCHAR |  |  |
| icd9_admit_diagnosis_desc | VARCHAR |  |  |
| icd9_admit_diagnosis_group | VARCHAR |  |  |
| icd10_admit_diagnosis | VARCHAR |  |  |
| icd10_admit_diagnosis_desc | VARCHAR |  |  |
| icd10_admit_diagnosis_group | VARCHAR | S00-T88 Injury, poisoning and certain other consequences of external causes (S00-T88) |  |
| admit_priority | VARCHAR | ROUTINE ELECTIVE |  |
| seen_in_ed_y_n | VARCHAR | N |  |
| dischg_disposition | VARCHAR | TO HOME |  |
| dischg_svc_dept_ip_obs | VARCHAR |  |  |
| dischg_svc_desc_ip_obs | VARCHAR |  |  |
| death_indicator | VARCHAR | N |  |
| death_date | DATE |  |  |
| aids | REAL | 0.0 |  |
| cancer | REAL | 0.0 |  |
| cerebrovascular_disease | REAL | 0.0 |  |
| chf | REAL | 0.0 |  |
| copd | REAL | 0.0 |  |
| dementia | REAL | 0.0 |  |
| diabetes_w_o_complications | REAL | 0.0 |  |
| diabetes_w_complications | REAL | 0.0 |  |
| m_i | REAL | 0.0 |  |
| metastatic_carcinoma | REAL | 0.0 |  |
| mild_liver_disease | REAL | 0.0 |  |
| moderate_severe_liver_disease | REAL | 0.0 |  |
| paraplegia_hemiplegia | REAL | 0.0 |  |
| peptic_ulcer_disease | REAL | 0.0 |  |
| peripheral_vascular_disease | REAL | 0.0 |  |
| renal_disease | REAL | 0.0 |  |
| rheumatologic_disease | REAL | 0.0 |  |
| aids_poa | REAL | 0.0 |  |
| cancer_poa | REAL | 0.0 |  |
| cerebrovascular_poa | REAL | 0.0 |  |
| chf_poa | REAL | 0.0 |  |
| copd_poa | REAL | 0.0 |  |
| dementia_poa | REAL | 0.0 |  |
| diabetes_w_o_complications_poa | REAL | 0.0 |  |
| diabetes_w_complications_poa | REAL | 0.0 |  |
| m_i_poa | REAL | 0.0 |  |
| metastatic_carcinoma_poa | REAL | 0.0 |  |
| mild_liver_disease_poa | REAL | 0.0 |  |
| moderate_severe_liver_disease_poa | REAL | 0.0 |  |
| paraplegia_hemiplegia_poa | REAL | 0.0 |  |
| peptic_ulcer_disease_poa | REAL | 0.0 |  |
| peripheral_vascular_disease_poa | REAL | 0.0 |  |
| renal_disease_poa | REAL | 0.0 |  |
| rheumatologic_poa | REAL | 0.0 |  |
| charlson_comorbidity_total_score | REAL | 0.0 |  |
| height_cm | VARCHAR | height_cm |  |
| weight_kgs | VARCHAR | weight_kgs |  |
| smoking_status | VARCHAR | Never Smoker  |  |
| ed_dischg_datetime_first | VARCHAR |  |  |
| attending_dr_deiden_id | INT | 15330 |  |
| referring_dr_deiden_id | INT | 17945 |  |
| primary_enc_yn | VARCHAR |  |  |
| ed_dischg_datetime_all | VARCHAR |  |  |
| merged_admit_datetime | VARCHAR |  |  |
| merged_dischg_datetime | VARCHAR |  |  |
| idealist_eligible_encounter | VARCHAR | N |  |

### Table: charges_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| total_cost | REAL | 0.0 |  |
| total_charges | REAL | 265.0 |  |
| admit_date | DATE | 2016-03-31 |  |
| discharge_date | DATE | 2016-04-22 |  |
| icu_charge | REAL |  |  |
| professional_service_charge | REAL | 860.0 |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10427 |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10259_22713 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10323_m_2 |  |
| batch_visit_detail_id | INT |  |  |
| intraop_y_n | VARCHAR | N |  |

### Table: transfusions_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| procedure_desc | VARCHAR | TRANSFUSE RED BLOOD CELLS |  |
| order_datetime | VARCHAR | 2020-10-02 10:10:00 |  |
| frequency | VARCHAR | TRANSFUSE 2 UNITS |  |
| blood_start_instant | VARCHAR |  |  |
| blood_end_instant | VARCHAR |  |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1006 |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_1018_3021 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_1018_m_12 |  |
| imputed_blood_start_instant | INT | 0 |  |
| batch_visit_detail_id | INT |  |  |
| intraop_y_n | VARCHAR | N |  |

### Table: education_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| education_years_or_highest_level | VARCHAR | 12.0 |  |
| encounter_date | REAL |  |  |
| recorded_date | DATE | 2019-06-05 |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10427 |  |
| encounter_deiden_id | VARCHAR |  |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10578_m_13 |  |
| batch_visit_detail_id | INT |  |  |
| intraop_y_n | VARCHAR | N |  |

### Table: labs_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| value_source_value | VARCHAR | Negative |  |
| unit_source_value | VARCHAR |  |  |
| range_low | VARCHAR |  |  |
| range_high | VARCHAR |  |  |
| result_datetime | VARCHAR | 2021-02-06 11:35:00 |  |
| measurement_datetime | VARCHAR | 2015-12-10 15:20:00 |  |
| lab_id | INT | 1232676 |  |
| order_datetime | VARCHAR | 2019-09-19 00:30:00 |  |
| proc_code | VARCHAR | LAB123294 |  |
| stamped_and_inferred_loinc_code | VARCHAR |  |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10590 |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_1018_3021 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_1018_m_12 |  |
| batch_visit_detail_id | INT |  |  |
| intraop_y_n | VARCHAR | N |  |
| unit_source_concept_id | INT | 0 |  |
| lab_type | VARCHAR |  |  |
| unit_concept_id | INT |  |  |
| generate_binary | INT | 0 |  |
| generate_categorical | INT | 0 |  |
| generate_numeric | INT |  |  |
| var_abbrev | VARCHAR |  |  |
| imputed_unit | INT | 0 |  |
| non_standard_unit | INT | 0 |  |
| value_as_number | REAL |  |  |
| operator_source_value | VARCHAR |  |  |
| value_as_concept | VARCHAR |  |  |
| out_of_range_flag | INT | 0 |  |
| value_as_concept_id | REAL |  |  |

### Table: respiratory_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| respiratory_datetime | VARCHAR | 2015-12-18 08:00:00 |  |
| measurement_name | VARCHAR | spo2 |  |
| measured_value | VARCHAR | 100.0 |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1018 |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10021_22276 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_1018_m_12 |  |
| batch_visit_detail_id | INT |  |  |
| intraop_y_n | VARCHAR | N |  |
| at_station | VARCHAR |  |  |
| station_type | VARCHAR | OR |  |
| measured_value_numeric | REAL | 100.0 |  |
| imputed | INT | 0 |  |
| source_respiratory_device | EMPTY |  |  |
| device_type | EMPTY |  |  |

### Table: 21_nephrology_consult_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| order_placed_datetime | VARCHAR |  |  |
| proc_cd_desc | VARCHAR | IP CONSULT TO NEPHROLOGY JX |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10314 |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_1006_4135 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10314_m_5 |  |
| batch_visit_detail_id | INT |  |  |
| intraop_y_n | VARCHAR | N |  |

### Table: or_case_schedule_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| case_status | VARCHAR | Completed |  |
| case_class | VARCHAR |  |  |
| sched_location | VARCHAR | JAX |  |
| sched_north_south | VARCHAR | Other |  |
| sched_site | VARCHAR | JAX |  |
| sched_site_description | VARCHAR | Shands Jax |  |
| sched_service | VARCHAR | Orthopaedics |  |
| sched_room | VARCHAR | FSC INJECTION |  |
| sched_room_type | VARCHAR | Main OR - JAX |  |
| sched_trauma_room_yn | VARCHAR | N |  |
| sched_surg_service | VARCHAR |  |  |
| sched_patient_class_code | VARCHAR | HOSPITAL AMBULATORY SURGERY |  |
| sched_anesthesia_type | VARCHAR | General |  |
| sched_post_op_location | VARCHAR |  |  |
| sched_case_date | VARCHAR | 2019-02-13 00:00:00 |  |
| sched_start_datetime | VARCHAR |  |  |
| sched_start_time_char | INT | 800 |  |
| sched_stop_time_char | INT | 1100 |  |
| sched_base_procedure_1 | VARCHAR | LEFT HEART CATHETERIZATION |  |
| sched_base_procedure_code_1 | VARCHAR | 500871 |  |
| sched_cpt_1 | VARCHAR |  |  |
| sched_cpt_1_description | VARCHAR | NOT INCLUDED IN ORIGINAL SOURCE |  |
| sched_base_procedure_2 | VARCHAR |  |  |
| sched_base_procedure_code_2 | VARCHAR |  |  |
| sched_cpt_2 | VARCHAR |  |  |
| sched_cpt_2_description | VARCHAR |  |  |
| sched_base_procedure_3 | VARCHAR |  |  |
| sched_base_procedure_code_3 | REAL |  |  |
| sched_cpt_3 | VARCHAR |  |  |
| sched_cpt_3_description | VARCHAR |  |  |
| sched_base_procedure_4 | VARCHAR |  |  |
| sched_base_procedure_code_4 | REAL |  |  |
| sched_cpt_4 | INT |  |  |
| sched_cpt_4_description | VARCHAR |  |  |
| sched_base_procedure_5 | VARCHAR |  |  |
| sched_base_procedure_code_5 | REAL |  |  |
| sched_cpt_5 | REAL |  |  |
| sched_cpt_5_description | VARCHAR |  |  |
| sched_base_procedure_6 | VARCHAR |  |  |
| sched_base_procedure_code_6 | REAL |  |  |
| sched_cpt_6 | REAL |  |  |
| sched_cpt_6_description | VARCHAR |  |  |
| sched_base_procedure_7 | VARCHAR |  |  |
| sched_base_procedure_code_7 | REAL |  |  |
| sched_cpt_7 | REAL |  |  |
| sched_cpt_7_description | VARCHAR |  |  |
| sched_base_procedure_8 | VARCHAR |  |  |
| sched_base_procedure_code_8 | REAL |  |  |
| sched_cpt_8 | REAL |  |  |
| sched_cpt_8_description | VARCHAR |  |  |
| sched_base_procedure_9 | VARCHAR |  |  |
| sched_base_procedure_code_9 | REAL |  |  |
| sched_cpt_9 | REAL |  |  |
| sched_cpt_9_description | VARCHAR |  |  |
| sched_base_procedure_10 | VARCHAR |  |  |
| sched_base_procedure_code_10 | REAL |  |  |
| sched_cpt_10 | REAL |  |  |
| sched_cpt_10_description | VARCHAR |  |  |
| room_start_datetime | VARCHAR |  |  |
| room_end_datetime | VARCHAR |  |  |
| incision_datetime | VARCHAR |  |  |
| dressing_datetime | VARCHAR |  |  |
| anesthesia_start_datetime | VARCHAR |  |  |
| anesthesia_stop_datetime | VARCHAR |  |  |
| base_procedure_1 | VARCHAR | LEFT HEART CATHETERIZATION |  |
| base_procedure_code_1 | VARCHAR |  |  |
| cpt_1 | VARCHAR |  |  |
| cpt_1_description | VARCHAR | NOT INCLUDED IN ORIGINAL SOURCE |  |
| base_procedure_2 | VARCHAR |  |  |
| base_procedure_code_2 | REAL |  |  |
| cpt_2 | VARCHAR |  |  |
| cpt_2_description | VARCHAR |  |  |
| base_procedure_3 | VARCHAR |  |  |
| base_procedure_code_3 | REAL |  |  |
| cpt_3 | INT |  |  |
| cpt_3_description | VARCHAR |  |  |
| base_procedure_4 | VARCHAR |  |  |
| base_procedure_code_4 | REAL |  |  |
| cpt_4 | INT |  |  |
| cpt_4_description | VARCHAR |  |  |
| base_procedure_5 | VARCHAR |  |  |
| base_procedure_code_5 | REAL |  |  |
| cpt_5 | REAL |  |  |
| cpt_5_description | VARCHAR |  |  |
| base_procedure_6 | VARCHAR |  |  |
| base_procedure_code_6 | REAL |  |  |
| cpt_6 | REAL |  |  |
| cpt_6_description | VARCHAR |  |  |
| base_procedure_7 | VARCHAR |  |  |
| base_procedure_code_7 | REAL |  |  |
| cpt_7 | REAL |  |  |
| cpt_7_description | VARCHAR |  |  |
| base_procedure_8 | VARCHAR |  |  |
| base_procedure_code_8 | REAL |  |  |
| cpt_8 | REAL |  |  |
| cpt_8_description | VARCHAR |  |  |
| base_procedure_9 | VARCHAR |  |  |
| base_procedure_code_9 | REAL |  |  |
| cpt_9 | REAL |  |  |
| cpt_9_description | VARCHAR |  |  |
| base_procedure_10 | VARCHAR |  |  |
| base_procedure_code_10 | REAL |  |  |
| cpt_10 | REAL |  |  |
| cpt_10_description | VARCHAR |  |  |
| service | VARCHAR | Orthopaedics |  |
| surgery_type | VARCHAR | ELECTIVE |  |
| location | VARCHAR | JAX |  |
| site | VARCHAR | JAX |  |
| site_description | VARCHAR | Shands Jax |  |
| room_type | VARCHAR | Main OR - JAX |  |
| nora_yn | VARCHAR | N |  |
| gi_room_yn | VARCHAR | N |  |
| case_date | DATE | 2019-02-13 |  |
| anesthesia_type | VARCHAR | General |  |
| nerve_block_yn | VARCHAR | N |  |
| ready_for_or_datetime | VARCHAR |  |  |
| pre_op_begin_datetime | VARCHAR |  |  |
| pre_op_end_datetime | VARCHAR |  |  |
| procedure_start_datetime | VARCHAR |  |  |
| begin_to_close_datetime | VARCHAR |  |  |
| procedure_end_datetime | VARCHAR |  |  |
| procedural_care_complete_datetime | VARCHAR |  |  |
| anesthesia_ready_datetime | VARCHAR |  |  |
| anesthesia_arrival_datetime | EMPTY |  |  |
| anesthesia_block_start_datetime | VARCHAR |  |  |
| anesthesia_block_stop_datetime | VARCHAR |  |  |
| pacu_start_datetime | VARCHAR |  |  |
| surgeon_in_datetime | VARCHAR |  |  |
| surgeon_out_datetime | VARCHAR |  |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10461 |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10599_23239 |  |
| or_case_num | VARCHAR |  |  |
| sched_surgeon_dr_deiden_id | INT | 17791 |  |
| main_surgeon_dr_deiden_id | REAL | 25784.0 |  |
| main_anesthesiologist_dr_deiden_id | REAL | 17791.0 |  |
| surgery_start_datetime | VARCHAR |  |  |
| surgery_stop_datetime | VARCHAR |  |  |
| imputed_surgery_start | REAL | 1.0 |  |
| imputed_surgery_stop | REAL | 1.0 |  |
| sched_post_op_location_type | VARCHAR |  |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10599_m_1 |  |

### Table: prescribing_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| row_id | INT |  |  |
| med_order_num | VARCHAR |  |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10021_22276 |  |
| rxnorm_concat | VARCHAR | | 1361226 | |  |
| med_names_concat | VARCHAR | | HEPARIN SODIUM (PORCINE) 1000 UNIT/ML IJ SOLN | |  |
| meds_simple_generic_names_concat | VARCHAR | | Heparin Sodium (Porcine) | |  |
| med_generic_name_strength_concat | VARCHAR |  |  |
| med_name_strength_concat | VARCHAR |  |  |
| med_therapy_class_concat | VARCHAR | | ANALGESICS & ANESTHETICS | |  |
| pharmacy_class_concat | VARCHAR | | ANALGESICS-NARCOTIC | |  |
| pharmacy_subclass_concat | VARCHAR | | HEPARINS AND HEPARINOID-LIKE AGENTS | |  |
| ambulatory_prescribed_y_n | VARCHAR | N |  |
| anes_ordered_med_y_n | VARCHAR | N |  |
| batch_visit_detail_id | EMPTY |  |  |
| historical_med_y_n | VARCHAR | N |  |
| med_order_datetime | VARCHAR | 2019-10-12 13:39:00 |  |
| med_order_desc | VARCHAR | HEPARIN SODIUM (PORCINE) 1000 UNIT/ML IJ SOLN |  |
| med_order_discontinue_date | VARCHAR |  |  |
| med_order_discrete_disp_unit | VARCHAR |  |  |
| med_order_discrete_dispense_qty | REAL |  |  |
| med_order_discrete_dose | VARCHAR |  |  |
| med_order_discrete_dose_unit | VARCHAR | mg |  |
| med_order_display_name | VARCHAR | acetaminophen (TYLENOL) tablet 650 mg |  |
| med_order_end_datetime | VARCHAR |  |  |
| med_order_freq_desc | VARCHAR |  |  |
| med_order_qty | VARCHAR |  |  |
| med_order_refills | VARCHAR |  |  |
| med_order_refills_remaining | REAL | 0.0 |  |
| med_order_route | VARCHAR | ORAL |  |
| med_order_start_datetime | VARCHAR |  |  |
| med_order_status | VARCHAR | SENT |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10590_m_15 |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10621 |  |

### Table: encounter_aki_episodes_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| merged_enc_id | VARCHAR |  |  |
| episode_begin_date | DATE |  |  |
| episode_end_date | DATE |  |  |
| episode_days | REAL | 1.0 |  |
| episode | INT | 1 |  |
| worst_aki_stage_in_episode | VARCHAR | Stage 1 |  |

### Table: 30_all_generated_surgical_variables_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| sched_room | VARCHAR | JX OR 02 |  |
| sched_post_op_location | VARCHAR | missing |  |
| sched_start_time | VARCHAR |  |  |
| primary_proc | VARCHAR | missing |  |
| site | VARCHAR | JAX |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1020 |  |
| or_case_num | VARCHAR |  |  |
| attend_doc | VARCHAR | 24542 |  |
| surgery_start_datetime | VARCHAR |  |  |
| surgery_stop_datetime | VARCHAR |  |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10599_m_1 |  |
| hospital | VARCHAR | JAX |  |
| encounter_effective_date | VARCHAR | 2016-05-04 00:00:00 |  |
| sex | VARCHAR | MALE |  |
| race | VARCHAR | WHITE |  |
| ethnicity | VARCHAR | NON-HISPANIC |  |
| language | VARCHAR | ENGLISH |  |
| zip | VARCHAR | 32218 |  |
| county | VARCHAR | Duval |  |
| marital_status | VARCHAR | SINGLE |  |
| payer | VARCHAR | MEDICARE |  |
| smoking_status | VARCHAR | NEVER |  |
| bmi | VARCHAR | MISSING |  |
| age | VARCHAR | 57.0 |  |
| admission_source | VARCHAR | NON-TRANSFER |  |
| admitting_type | VARCHAR | SURGERY |  |
| emergent | VARCHAR | EMERGENCY |  |
| surgery_type | VARCHAR | OTHER |  |
| postop_loc | VARCHAR | NON-ICU |  |
| time_to_surgery | REAL | 0.0 |  |
| admit_day | VARCHAR | Wednesday |  |
| admit_month | VARCHAR | Apr |  |
| admit_year | INT | 2016 |  |
| admit_hour | INT | 5 |  |
| night_admission | INT | 0 |  |
| total | VARCHAR | 56734 |  |
| rural | VARCHAR | 0 |  |
| median_income | VARCHAR | 47401 |  |
| perc_below_poverty | VARCHAR | 15.9 |  |
| prop_black | VARCHAR | 0.490094123 |  |
| prop_hisp | VARCHAR | 0.047326118 |  |
| distance_to_facility | VARCHAR | 0.0 |  |
| aceis_arbs | VARCHAR | 0.0 |  |
| aminoglycosides | VARCHAR | 0.0 |  |
| antiemetics | VARCHAR | 0.0 |  |
| beta_blockers | VARCHAR | 0.0 |  |
| bicarbonates | VARCHAR | 0.0 |  |
| corticosteroids | VARCHAR | 0.0 |  |
| diuretics | VARCHAR | 0.0 |  |
| nsaids | VARCHAR | 0.0 |  |
| pressors_inotropes | VARCHAR | 0.0 |  |
| vancomycin | VARCHAR | 0.0 |  |
| num_meds | VARCHAR | 0.0 |  |
| aspirin | VARCHAR | 0.0 |  |
| statins | VARCHAR | 0.0 |  |
| nephrotoxic | VARCHAR | 0.0 |  |
| cci | INT | 0 |  |
| liverd | INT | 0 |  |
| anemia | INT | 0 |  |
| alc_drug | INT | 0 |  |
| udn | REAL | 0.0 |  |
| imi | INT | 0 |  |
| ichf | INT | 0 |  |
| ipvd | INT | 0 |  |
| icvd | INT | 0 |  |
| icpd | INT | 0 |  |
| diabetes | INT | 0 |  |
| icancer | INT | 0 |  |
| imcancer | INT | 0 |  |
| valve | INT | 0 |  |
| htn_c | INT | 0 |  |
| hypothy | INT | 0 |  |
| coag | INT | 0 |  |
| obese | INT | 0 |  |
| wghtloss | INT | 0 |  |
| lytes | INT | 0 |  |
| depress | INT | 0 |  |
| serum_ph_present_0_7 | REAL | 0.0 |  |
| serum_ph_present_8_365 | REAL | 0.0 |  |
| count_rbcurn_0_7 | REAL | 0.0 |  |
| rbcur_0_7 | VARCHAR | missing |  |
| count_rbcurn_8_365 | REAL | 0.0 |  |
| rbcur_8_365 | VARCHAR | missing |  |
| count_gluurnn_0_7 | REAL | 0.0 |  |
| gluurn_0_7 | VARCHAR | missing |  |
| count_gluurnn_8_365 | REAL | 0.0 |  |
| gluurn_8_365 | VARCHAR | missing |  |
| count_hgburn_0_7 | REAL | 0.0 |  |
| hgbur_0_7 | VARCHAR | missing |  |
| count_hgburn_8_365 | REAL | 0.0 |  |
| hgbur_8_365 | VARCHAR | missing |  |
| count_uapn_0_7 | REAL | 0.0 |  |
| uap_0_7 | VARCHAR | missing |  |
| count_uapn_8_365 | REAL | 0.0 |  |
| uap_8_365 | VARCHAR | missing |  |
| hgb_min_0_7 | VARCHAR | missing |  |
| hgb_max_0_7 | VARCHAR | missing |  |
| hgb_mean_0_7 | VARCHAR | missing |  |
| hgb_var_0_7 | VARCHAR | missing |  |
| count_hgb_0_7 | REAL | 0.0 |  |
| hgb_min_8_365 | VARCHAR | missing |  |
| hgb_max_8_365 | VARCHAR | missing |  |
| hgb_mean_8_365 | VARCHAR | missing |  |
| hgb_var_8_365 | VARCHAR | missing |  |
| count_hgb_8_365 | REAL | 0.0 |  |
| serum_na_min_0_7 | VARCHAR | missing |  |
| serum_na_max_0_7 | VARCHAR | missing |  |
| serum_na_mean_0_7 | VARCHAR | missing |  |
| serum_na_var_0_7 | VARCHAR | missing |  |
| count_serum_na_0_7 | REAL | 0.0 |  |
| serum_na_min_8_365 | VARCHAR | missing |  |
| serum_na_max_8_365 | VARCHAR | missing |  |
| serum_na_mean_8_365 | VARCHAR | missing |  |
| serum_na_var_8_365 | VARCHAR | missing |  |
| count_serum_na_8_365 | REAL | 0.0 |  |
| rdw_min_0_7 | VARCHAR | missing |  |
| rdw_max_0_7 | VARCHAR | missing |  |
| rdw_mean_0_7 | VARCHAR | missing |  |
| rdw_var_0_7 | VARCHAR | missing |  |
| count_rdw_0_7 | REAL | 0.0 |  |
| rdw_min_8_365 | VARCHAR | missing |  |
| rdw_max_8_365 | VARCHAR | missing |  |
| rdw_mean_8_365 | VARCHAR | missing |  |
| rdw_var_8_365 | VARCHAR | missing |  |
| count_rdw_8_365 | REAL | 0.0 |  |
| serum_anion_gap_min_0_7 | VARCHAR | missing |  |
| serum_anion_gap_max_0_7 | VARCHAR | missing |  |
| serum_anion_gap_mean_0_7 | VARCHAR | missing |  |
| serum_anion_gap_var_0_7 | VARCHAR | missing |  |
| count_serum_anion_gap_0_7 | REAL | 0.0 |  |
| serum_anion_gap_min_8_365 | VARCHAR | missing |  |
| serum_anion_gap_max_8_365 | VARCHAR | missing |  |
| serum_anion_gap_mean_8_365 | VARCHAR | missing |  |
| serum_anion_gap_var_8_365 | VARCHAR | missing |  |
| count_serum_anion_gap_8_365 | REAL | 0.0 |  |
| wbc_min_0_7 | VARCHAR | missing |  |
| wbc_max_0_7 | VARCHAR | missing |  |
| wbc_mean_0_7 | VARCHAR | missing |  |
| wbc_var_0_7 | VARCHAR | 0.0 |  |
| count_wbc_0_7 | REAL | 1.0 |  |
| wbc_min_8_365 | VARCHAR | missing |  |
| wbc_max_8_365 | VARCHAR | missing |  |
| wbc_mean_8_365 | VARCHAR | missing |  |
| wbc_var_8_365 | VARCHAR | missing |  |
| count_wbc_8_365 | REAL | 0.0 |  |
| serum_creatinine_min_0_7 | VARCHAR | missing |  |
| serum_creatinine_max_0_7 | VARCHAR | missing |  |
| serum_creatinine_mean_0_7 | VARCHAR | missing |  |
| serum_creatinine_var_0_7 | VARCHAR | missing |  |
| count_serum_creatinine_0_7 | REAL | 0.0 |  |
| serum_creatinine_min_8_365 | VARCHAR | missing |  |
| serum_creatinine_max_8_365 | VARCHAR | missing |  |
| serum_creatinine_mean_8_365 | VARCHAR | missing |  |
| serum_creatinine_var_8_365 | VARCHAR | missing |  |
| count_serum_creatinine_8_365 | REAL | 0.0 |  |
| hct_min_0_7 | VARCHAR | missing |  |
| hct_max_0_7 | VARCHAR | missing |  |
| hct_mean_0_7 | VARCHAR | missing |  |
| hct_var_0_7 | VARCHAR | 0.0 |  |
| count_hct_0_7 | REAL | 1.0 |  |
| hct_min_8_365 | VARCHAR | missing |  |
| hct_max_8_365 | VARCHAR | missing |  |
| hct_mean_8_365 | VARCHAR | missing |  |
| hct_var_8_365 | VARCHAR | missing |  |
| count_hct_8_365 | REAL | 0.0 |  |
| plt_min_0_7 | VARCHAR | missing |  |
| plt_max_0_7 | VARCHAR | missing |  |
| plt_mean_0_7 | VARCHAR | missing |  |
| plt_var_0_7 | VARCHAR | missing |  |
| count_plt_0_7 | REAL | 0.0 |  |
| plt_min_8_365 | VARCHAR | missing |  |
| plt_max_8_365 | VARCHAR | missing |  |
| plt_mean_8_365 | VARCHAR | missing |  |
| plt_var_8_365 | VARCHAR | missing |  |
| count_plt_8_365 | REAL | 0.0 |  |
| rbc_mcv_min_0_7 | VARCHAR | missing |  |
| rbc_mcv_max_0_7 | VARCHAR | missing |  |
| rbc_mcv_mean_0_7 | VARCHAR | missing |  |
| rbc_mcv_var_0_7 | VARCHAR | missing |  |
| count_rbc_mcv_0_7 | REAL | 0.0 |  |
| rbc_mcv_min_8_365 | VARCHAR | missing |  |
| rbc_mcv_max_8_365 | VARCHAR | missing |  |
| rbc_mcv_mean_8_365 | VARCHAR | missing |  |
| rbc_mcv_var_8_365 | VARCHAR | missing |  |
| count_rbc_mcv_8_365 | REAL | 0.0 |  |
| mpv_min_0_7 | VARCHAR | missing |  |
| mpv_max_0_7 | VARCHAR | missing |  |
| mpv_mean_0_7 | VARCHAR | missing |  |
| mpv_var_0_7 | VARCHAR | missing |  |
| count_mpv_0_7 | REAL | 0.0 |  |
| mpv_min_8_365 | VARCHAR | missing |  |
| mpv_max_8_365 | VARCHAR | missing |  |
| mpv_mean_8_365 | VARCHAR | missing |  |
| mpv_var_8_365 | VARCHAR | missing |  |
| count_mpv_8_365 | REAL | 0.0 |  |
| serum_glucose_min_0_7 | VARCHAR | missing |  |
| serum_glucose_max_0_7 | VARCHAR | missing |  |
| serum_glucose_mean_0_7 | VARCHAR | missing |  |
| serum_glucose_var_0_7 | VARCHAR | missing |  |
| count_serum_glucose_0_7 | REAL | 0.0 |  |
| serum_glucose_min_8_365 | VARCHAR | missing |  |
| serum_glucose_max_8_365 | VARCHAR | missing |  |
| serum_glucose_mean_8_365 | VARCHAR | missing |  |
| serum_glucose_var_8_365 | VARCHAR | missing |  |
| count_serum_glucose_8_365 | REAL | 0.0 |  |
| rbc_min_0_7 | VARCHAR | missing |  |
| rbc_max_0_7 | VARCHAR | missing |  |
| rbc_mean_0_7 | VARCHAR | missing |  |
| rbc_var_0_7 | VARCHAR | 0.0 |  |
| count_rbc_0_7 | REAL | 1.0 |  |
| rbc_min_8_365 | VARCHAR | missing |  |
| rbc_max_8_365 | VARCHAR | missing |  |
| rbc_mean_8_365 | VARCHAR | missing |  |
| rbc_var_8_365 | VARCHAR | missing |  |
| count_rbc_8_365 | REAL | 0.0 |  |
| serum_alanine_min_0_7 | VARCHAR | missing |  |
| serum_alanine_max_0_7 | VARCHAR | missing |  |
| serum_alanine_mean_0_7 | VARCHAR | missing |  |
| serum_alanine_var_0_7 | VARCHAR | missing |  |
| count_serum_alanine_0_7 | REAL | 0.0 |  |
| serum_alanine_min_8_365 | VARCHAR | missing |  |
| serum_alanine_max_8_365 | VARCHAR | missing |  |
| serum_alanine_mean_8_365 | VARCHAR | missing |  |
| serum_alanine_var_8_365 | VARCHAR | missing |  |
| count_serum_alanine_8_365 | REAL | 0.0 |  |
| serum_asparate_min_0_7 | VARCHAR | missing |  |
| serum_asparate_max_0_7 | VARCHAR | missing |  |
| serum_asparate_mean_0_7 | VARCHAR | missing |  |
| serum_asparate_var_0_7 | VARCHAR | missing |  |
| count_serum_asparate_0_7 | REAL | 0.0 |  |
| serum_asparate_min_8_365 | VARCHAR | missing |  |
| serum_asparate_max_8_365 | VARCHAR | missing |  |
| serum_asparate_mean_8_365 | VARCHAR | missing |  |
| serum_asparate_var_8_365 | VARCHAR | missing |  |
| count_serum_asparate_8_365 | REAL | 0.0 |  |
| serum_co2_min_0_7 | VARCHAR | missing |  |
| serum_co2_max_0_7 | VARCHAR | missing |  |
| serum_co2_mean_0_7 | VARCHAR | missing |  |
| serum_co2_var_0_7 | VARCHAR | missing |  |
| count_serum_co2_0_7 | REAL | 0.0 |  |
| serum_co2_min_8_365 | VARCHAR | missing |  |
| serum_co2_max_8_365 | VARCHAR | missing |  |
| serum_co2_mean_8_365 | VARCHAR | missing |  |
| serum_co2_var_8_365 | VARCHAR | missing |  |
| count_serum_co2_8_365 | REAL | 0.0 |  |
| serum_k_min_0_7 | VARCHAR | missing |  |
| serum_k_max_0_7 | VARCHAR | missing |  |
| serum_k_mean_0_7 | VARCHAR | missing |  |
| serum_k_var_0_7 | VARCHAR | missing |  |
| count_serum_k_0_7 | REAL | 0.0 |  |
| serum_k_min_8_365 | VARCHAR | missing |  |
| serum_k_max_8_365 | VARCHAR | missing |  |
| serum_k_mean_8_365 | VARCHAR | missing |  |
| serum_k_var_8_365 | VARCHAR | missing |  |
| count_serum_k_8_365 | REAL | 0.0 |  |
| bun_min_0_7 | VARCHAR | missing |  |
| bun_max_0_7 | VARCHAR | missing |  |
| bun_mean_0_7 | VARCHAR | missing |  |
| bun_var_0_7 | VARCHAR | 0.0 |  |
| count_bun_0_7 | REAL | 1.0 |  |
| bun_min_8_365 | VARCHAR | missing |  |
| bun_max_8_365 | VARCHAR | missing |  |
| bun_mean_8_365 | VARCHAR | missing |  |
| bun_var_8_365 | VARCHAR | missing |  |
| count_bun_8_365 | REAL | 0.0 |  |
| serum_ca_min_0_7 | VARCHAR | missing |  |
| serum_ca_max_0_7 | VARCHAR | missing |  |
| serum_ca_mean_0_7 | VARCHAR | missing |  |
| serum_ca_var_0_7 | VARCHAR | missing |  |
| count_serum_ca_0_7 | REAL | 0.0 |  |
| serum_ca_min_8_365 | VARCHAR | missing |  |
| serum_ca_max_8_365 | VARCHAR | missing |  |
| serum_ca_mean_8_365 | VARCHAR | missing |  |
| serum_ca_var_8_365 | VARCHAR | missing |  |
| count_serum_ca_8_365 | REAL | 0.0 |  |
| serum_cl_min_0_7 | VARCHAR | missing |  |
| serum_cl_max_0_7 | VARCHAR | missing |  |
| serum_cl_mean_0_7 | VARCHAR | missing |  |
| serum_cl_var_0_7 | VARCHAR | missing |  |
| count_serum_cl_0_7 | REAL | 0.0 |  |
| serum_cl_min_8_365 | VARCHAR | missing |  |
| serum_cl_max_8_365 | VARCHAR | missing |  |
| serum_cl_mean_8_365 | VARCHAR | missing |  |
| serum_cl_var_8_365 | VARCHAR | missing |  |
| count_serum_cl_8_365 | REAL | 0.0 |  |
| serum_band_min_0_7 | VARCHAR | missing |  |
| serum_band_max_0_7 | VARCHAR | missing |  |
| serum_band_mean_0_7 | VARCHAR | missing |  |
| serum_band_var_0_7 | VARCHAR | missing |  |
| count_serum_band_0_7 | REAL | 0.0 |  |
| serum_band_min_8_365 | VARCHAR | missing |  |
| serum_band_max_8_365 | VARCHAR | missing |  |
| serum_band_mean_8_365 | VARCHAR | missing |  |
| serum_band_var_8_365 | VARCHAR | missing |  |
| count_serum_band_8_365 | REAL | 0.0 |  |
| rbc_mch_min_0_7 | VARCHAR | missing |  |
| rbc_mch_max_0_7 | VARCHAR | missing |  |
| rbc_mch_mean_0_7 | VARCHAR | missing |  |
| rbc_mch_var_0_7 | VARCHAR | missing |  |
| count_rbc_mch_0_7 | REAL | 0.0 |  |
| rbc_mch_min_8_365 | VARCHAR | missing |  |
| rbc_mch_max_8_365 | VARCHAR | missing |  |
| rbc_mch_mean_8_365 | VARCHAR | missing |  |
| rbc_mch_var_8_365 | VARCHAR | missing |  |
| count_rbc_mch_8_365 | REAL | 0.0 |  |
| rbc_mchc_min_0_7 | VARCHAR | missing |  |
| rbc_mchc_max_0_7 | VARCHAR | missing |  |
| rbc_mchc_mean_0_7 | VARCHAR | missing |  |
| rbc_mchc_var_0_7 | VARCHAR | missing |  |
| count_rbc_mchc_0_7 | REAL | 0.0 |  |
| rbc_mchc_min_8_365 | VARCHAR | missing |  |
| rbc_mchc_max_8_365 | VARCHAR | missing |  |
| rbc_mchc_mean_8_365 | VARCHAR | missing |  |
| rbc_mchc_var_8_365 | VARCHAR | missing |  |
| count_rbc_mchc_8_365 | REAL | 0.0 |  |
| serum_albumin_min_0_7 | VARCHAR | missing |  |
| serum_albumin_max_0_7 | VARCHAR | missing |  |
| serum_albumin_mean_0_7 | VARCHAR | missing |  |
| serum_albumin_var_0_7 | VARCHAR | missing |  |
| count_serum_albumin_0_7 | REAL | 0.0 |  |
| serum_albumin_min_8_365 | VARCHAR | missing |  |
| serum_albumin_max_8_365 | VARCHAR | missing |  |
| serum_albumin_mean_8_365 | VARCHAR | missing |  |
| serum_albumin_var_8_365 | VARCHAR | missing |  |
| count_serum_albumin_8_365 | REAL | 0.0 |  |
| serum_bilirubin_min_0_7 | VARCHAR | missing |  |
| serum_bilirubin_max_0_7 | VARCHAR | missing |  |
| serum_bilirubin_mean_0_7 | VARCHAR | missing |  |
| serum_bilirubin_var_0_7 | VARCHAR | missing |  |
| count_serum_bilirubin_0_7 | REAL | 0.0 |  |
| serum_bilirubin_min_8_365 | VARCHAR | missing |  |
| serum_bilirubin_max_8_365 | VARCHAR | missing |  |
| serum_bilirubin_mean_8_365 | VARCHAR | missing |  |
| serum_bilirubin_var_8_365 | VARCHAR | missing |  |
| count_serum_bilirubin_8_365 | REAL | 0.0 |  |
| serum_inr_min_0_7 | VARCHAR | missing |  |
| serum_inr_max_0_7 | VARCHAR | missing |  |
| serum_inr_mean_0_7 | VARCHAR | missing |  |
| serum_inr_var_0_7 | VARCHAR | missing |  |
| count_serum_inr_0_7 | REAL | 0.0 |  |
| serum_inr_min_8_365 | VARCHAR | missing |  |
| serum_inr_max_8_365 | VARCHAR | missing |  |
| serum_inr_mean_8_365 | VARCHAR | missing |  |
| serum_inr_var_8_365 | VARCHAR | missing |  |
| count_serum_inr_8_365 | REAL | 0.0 |  |
| serum_lactate_min_0_7 | VARCHAR | missing |  |
| serum_lactate_max_0_7 | VARCHAR | missing |  |
| serum_lactate_mean_0_7 | VARCHAR | missing |  |
| serum_lactate_var_0_7 | VARCHAR | missing |  |
| count_serum_lactate_0_7 | REAL | 0.0 |  |
| serum_lactate_min_8_365 | VARCHAR | missing |  |
| serum_lactate_max_8_365 | VARCHAR | missing |  |
| serum_lactate_mean_8_365 | VARCHAR | missing |  |
| serum_lactate_var_8_365 | VARCHAR | missing |  |
| count_serum_lactate_8_365 | REAL | 0.0 |  |
| serum_crp_min_0_7 | VARCHAR | missing |  |
| serum_crp_max_0_7 | VARCHAR | missing |  |
| serum_crp_mean_0_7 | VARCHAR | missing |  |
| serum_crp_var_0_7 | VARCHAR | missing |  |
| count_serum_crp_0_7 | REAL | 0.0 |  |
| serum_crp_min_8_365 | VARCHAR | missing |  |
| serum_crp_max_8_365 | VARCHAR | missing |  |
| serum_crp_mean_8_365 | VARCHAR | missing |  |
| serum_crp_var_8_365 | VARCHAR | missing |  |
| count_serum_crp_8_365 | REAL | 0.0 |  |
| serum_esr_min_0_7 | VARCHAR | missing |  |
| serum_esr_max_0_7 | VARCHAR | missing |  |
| serum_esr_mean_0_7 | VARCHAR | missing |  |
| serum_esr_var_0_7 | VARCHAR | missing |  |
| count_serum_esr_0_7 | REAL | 0.0 |  |
| serum_esr_min_8_365 | VARCHAR | missing |  |
| serum_esr_max_8_365 | VARCHAR | missing |  |
| serum_esr_mean_8_365 | VARCHAR | missing |  |
| serum_esr_var_8_365 | VARCHAR | missing |  |
| count_serum_esr_8_365 | REAL | 0.0 |  |
| serum_tropt_min_0_7 | VARCHAR | missing |  |
| serum_tropt_max_0_7 | VARCHAR | missing |  |
| serum_tropt_mean_0_7 | VARCHAR | missing |  |
| serum_tropt_var_0_7 | VARCHAR | missing |  |
| count_serum_tropt_0_7 | REAL | 0.0 |  |
| serum_tropt_min_8_365 | VARCHAR | missing |  |
| serum_tropt_max_8_365 | VARCHAR | missing |  |
| serum_tropt_mean_8_365 | VARCHAR | missing |  |
| serum_tropt_var_8_365 | VARCHAR | missing |  |
| count_serum_tropt_8_365 | REAL | 0.0 |  |
| serum_tropi_min_0_7 | VARCHAR | missing |  |
| serum_tropi_max_0_7 | VARCHAR | missing |  |
| serum_tropi_mean_0_7 | VARCHAR | missing |  |
| serum_tropi_var_0_7 | VARCHAR | missing |  |
| count_serum_tropi_0_7 | REAL | 0.0 |  |
| serum_tropi_min_8_365 | VARCHAR | missing |  |
| serum_tropi_max_8_365 | VARCHAR | missing |  |
| serum_tropi_mean_8_365 | VARCHAR | missing |  |
| serum_tropi_var_8_365 | VARCHAR | missing |  |
| count_serum_tropi_8_365 | REAL | 0.0 |  |
| reference creatinine | VARCHAR | missing |  |
| ckd | VARCHAR | No CKD |  |
| egfr | VARCHAR | not available |  |
| specialty | VARCHAR | Orthopaedics |  |

### Table: 3_ob_history_mom_child_birthdate_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| delivery_date | EMPTY |  |  |
| patient_deiden_id | EMPTY |  |  |
| batch_visit_detail_id | EMPTY |  |  |
| intraop_y_n | EMPTY |  |  |

### Table: 54_hemodynamic_monitoring_clean_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| hemodynamic_monitoring_datetime | VARCHAR | 2019-05-11 07:00:00 |  |
| measurement_name | VARCHAR | svv |  |
| measurement_value | REAL | 9.0 |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10520 |  |
| encounter_deiden_id | VARCHAR | IDEALIST_2021-05-01_10520_22920 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10520_m_1 |  |
| batch_visit_detail_id | INT |  |  |
| intraop_y_n | VARCHAR | N |  |

### Table: 0_merged_enc_id_without_race_correction_v2_aki_trajectory_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10590_m_15 |  |
| aki_overall | REAL | 0.0 |  |
| aki_recovery | REAL |  |  |
| paki | REAL |  |  |
| dischg_place | VARCHAR | Home/Rehab |  |
| overall_type | VARCHAR | No AKI |  |
| akd_greater_than_7_days | INT | 0 |  |
| aki_recovery_undetermined | VARCHAR |  |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1073 |  |
| encounter_effective_date | DATE | 2016-03-03 |  |

### Table: 5_merged_enc_id_without_race_correction_v2_encounter_mort_dischg_place_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10590_m_15 |  |
| death_date_combined | DATE |  |  |
| hospital_mortality | VARCHAR | N |  |
| mort_status_30d | INT | 0 |  |
| mort_status_90d | INT | 0 |  |
| mort_status_6m | INT | 0 |  |
| mort_status_1y | INT | 0 |  |
| mort_status_2y | INT | 0 |  |
| mort_status_3y | INT | 0 |  |
| dischg_place | VARCHAR | Home/Rehab |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1001 |  |
| encounter_effective_date | DATE | 2016-05-09 |  |

### Table: 7_merged_enc_id_without_race_correction_v2_ckd_noesrd_summary_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1073 |  |
| merged_enc_id | VARCHAR |  |  |
| admit_datetime | VARCHAR | 2012-12-01 00:01:00 |  |
| dischg_datetime | VARCHAR | 2013-01-31 23:59:00 |  |
| sex | VARCHAR | FEMALE |  |
| race | VARCHAR | WHITE |  |
| ethnicity | VARCHAR | NOT HISPANIC |  |
| patient_type | VARCHAR | EMERGENCY |  |
| birth_date | DATE | 1981-10-07 |  |
| icd9_10flag_diagnosis | INT | 1 |  |
| icd9_10flag_procedures | INT | 1 |  |
| finalicd910 | INT | 1 |  |
| aki_admin_flag | INT | 0 |  |
| aki_code | VARCHAR |  |  |
| aki_code_date | DATE |  |  |
| aki_icd_type | VARCHAR |  |  |
| aki_cpt_code | EMPTY |  |  |
| aki_cpt_date | EMPTY |  |  |
| dialysis_admin_flag | INT | 0 |  |
| dialysis_code | VARCHAR |  |  |
| dialysis_code_date | DATE |  |  |
| dialysis_icd_type | VARCHAR |  |  |
| dialysis_cpt_code | REAL |  |  |
| dialysis_cpt_date | DATE |  |  |
| kidneytransplant_admin_flag | INT | 0 |  |
| kidney_transplant_code | VARCHAR |  |  |
| kidneytransplant_code_date | DATE |  |  |
| kidney_transplant_icd_type | VARCHAR |  |  |
| kidney_transplant_cpt_code | REAL |  |  |
| kidneytransplant_cpt_date | DATE |  |  |
| ckd_admin_flag | INT | 0 |  |
| ckd_code | VARCHAR |  |  |
| ckd_code_date | DATE |  |  |
| ckd_icd_type | VARCHAR |  |  |
| ckd_cpt_code | EMPTY |  |  |
| ckd_cpt_date | EMPTY |  |  |
| esrd_admin_flag | INT | 0 |  |
| esrd_code | VARCHAR |  |  |
| esrd_code_date | DATE |  |  |
| esrd_icd_type | VARCHAR |  |  |
| esrd_cpt_code | EMPTY |  |  |
| esrd_cpt_date | EMPTY |  |  |
| previous_creatinine_flag | INT | 1 |  |
| uncertain_ckd | INT | 1 |  |
| insufficient_data_flag | REAL | 0.0 |  |
| egfr_90d_apart_p30d | REAL | 0.0 |  |
| egfr_90d_apart_p30d_date | VARCHAR |  |  |
| egfr_30d | REAL |  |  |
| egfr_30d_date | DATE |  |  |
| admission_creatinine | REAL |  |  |
| min_7_days | REAL |  |  |
| min_7_days_date | DATE |  |  |
| medium_8_365_days | REAL |  |  |
| medium_8_365_days_date | DATE |  |  |
| age | REAL | 62.63783650588308 |  |
| mdrd | REAL | 0.8332302009300749 |  |
| final_class | VARCHAR | No CKD by Medical History Or Creatinine Criteria |  |
| egfr_staging | VARCHAR |  |  |
| reference_creatinine | REAL | 0.74 |  |
| method | VARCHAR | medium_8_365_days |  |
| egfr | REAL |  |  |
| ckd | VARCHAR | 0 |  |

### Table: 11_merged_enc_id_with_race_correction_encounter_mort_dischg_place_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10590_m_15 |  |
| death_date_combined | DATE |  |  |
| hospital_mortality | VARCHAR | N |  |
| mort_status_30d | INT | 0 |  |
| mort_status_90d | INT | 0 |  |
| mort_status_6m | INT | 0 |  |
| mort_status_1y | INT | 0 |  |
| mort_status_2y | INT | 0 |  |
| mort_status_3y | INT | 0 |  |
| dischg_place | VARCHAR | Home/Rehab |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1001 |  |
| encounter_effective_date | DATE | 2016-05-09 |  |

### Table: 14_merged_enc_id_without_race_correction_v2_aki_summary_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1073 |  |
| merged_enc_id | VARCHAR |  |  |
| admit_datetime | VARCHAR |  |  |
| dischg_datetime | VARCHAR |  |  |
| sex | VARCHAR | MALE |  |
| race | VARCHAR | WHITE |  |
| age | REAL |  |  |
| final_class | VARCHAR | No CKD by Medical History Or Creatinine Criteria |  |
| egfr | REAL |  |  |
| mdrd | REAL |  |  |
| first_aki_date | DATE |  |  |
| min_reference_creatinine_datetime | VARCHAR |  |  |
| min_reference_creatinine | REAL | 0.74 |  |
| max_reference_creatinine_datetime | VARCHAR |  |  |
| max_reference_creatinine | REAL | 0.72 |  |
| first_creatinine_datetime | VARCHAR |  |  |
| first_creatinine_value | REAL | 0.82 |  |
| last_creatinine_datetime | VARCHAR |  |  |
| last_creatinine_value | REAL | 0.82 |  |
| min_creatinine_datetime | VARCHAR |  |  |
| min_creatinine | REAL | 0.82 |  |
| max_creatinine_datetime | VARCHAR |  |  |
| max_creatinine | REAL | 0.82 |  |
| number_of_aki_episodes | REAL | 0.0 |  |
| days_in_stage_1 | REAL | 0.0 |  |
| days_in_stage_2 | REAL | 0.0 |  |
| days_in_stage_3 | REAL | 0.0 |  |
| days_in_stage_3_rrt | REAL | 0.0 |  |
| worst_aki_stage_date | DATE |  |  |
| worst_aki_staging | VARCHAR |  |  |
| discharge_aki_status | REAL | 0.0 |  |
| discharge_aki_stage | VARCHAR |  |  |
| aki_overall | REAL | 0.0 |  |
| first_rrt_datetime_record | VARCHAR |  |  |
| last_rrt_datetime_record | VARCHAR |  |  |
| recurrent_aki | REAL |  |  |
| aki_early_3d | INT | 0 |  |
| worst_aki_stage_3d | VARCHAR |  |  |
| episode_1 | VARCHAR |  |  |
| worst_aki_stage_in_episode_1 | VARCHAR |  |  |
| episode_2 | VARCHAR |  |  |
| worst_aki_stage_in_episode_2 | VARCHAR |  |  |
| episode_3 | VARCHAR |  |  |
| worst_aki_stage_in_episode_3 | VARCHAR |  |  |
| episode_4 | VARCHAR |  |  |
| worst_aki_stage_in_episode_4 | VARCHAR |  |  |

### Table: 15_merged_enc_id_without_race_correction_v2_ckd_aki_master_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10453 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10590_m_15 |  |
| encounter_effective_date | DATE | 2020-03-26 |  |
| admit_datetime | VARCHAR |  |  |
| dischg_datetime | VARCHAR |  |  |
| sex | VARCHAR |  |  |
| race | VARCHAR |  |  |
| ethnicity | VARCHAR |  |  |
| patient_type | VARCHAR |  |  |
| birth_date | DATE |  |  |
| icd9_10flag_diagnosis | INT |  |  |
| icd9_10flag_procedures | INT |  |  |
| finalicd910 | INT |  |  |
| aki_admin_flag | INT |  |  |
| aki_code | VARCHAR |  |  |
| aki_code_date | DATE |  |  |
| aki_icd_type | VARCHAR |  |  |
| aki_cpt_code | EMPTY |  |  |
| aki_cpt_date | EMPTY |  |  |
| dialysis_admin_flag | INT |  |  |
| dialysis_code | VARCHAR |  |  |
| dialysis_code_date | DATE |  |  |
| dialysis_icd_type | VARCHAR |  |  |
| dialysis_cpt_code | REAL |  |  |
| dialysis_cpt_date | DATE |  |  |
| kidneytransplant_admin_flag | INT |  |  |
| kidney_transplant_code | VARCHAR |  |  |
| kidneytransplant_code_date | DATE |  |  |
| kidney_transplant_icd_type | VARCHAR |  |  |
| kidney_transplant_cpt_code | REAL |  |  |
| kidneytransplant_cpt_date | DATE |  |  |
| ckd_admin_flag | INT |  |  |
| ckd_code | VARCHAR |  |  |
| ckd_code_date | DATE |  |  |
| ckd_icd_type | VARCHAR |  |  |
| ckd_cpt_code | EMPTY |  |  |
| ckd_cpt_date | EMPTY |  |  |
| esrd_admin_flag | INT |  |  |
| esrd_code | VARCHAR |  |  |
| esrd_code_date | DATE |  |  |
| esrd_icd_type | VARCHAR |  |  |
| esrd_cpt_code | EMPTY |  |  |
| esrd_cpt_date | EMPTY |  |  |
| previous_creatinine_flag | INT |  |  |
| uncertain_ckd | INT |  |  |
| insufficient_data_flag | REAL |  |  |
| egfr_90d_apart_p30d | REAL |  |  |
| egfr_90d_apart_p30d_date | VARCHAR |  |  |
| egfr_30d | REAL |  |  |
| egfr_30d_date | DATE |  |  |
| admission_creatinine | REAL |  |  |
| min_7_days | REAL |  |  |
| min_7_days_date | DATE |  |  |
| medium_8_365_days | REAL |  |  |
| medium_8_365_days_date | DATE |  |  |
| age | REAL |  |  |
| mdrd | REAL |  |  |
| final_class | VARCHAR |  |  |
| egfr_staging | VARCHAR |  |  |
| reference_creatinine | REAL |  |  |
| method | VARCHAR |  |  |
| egfr | REAL |  |  |
| ckd | VARCHAR |  |  |
| first_aki_date | DATE |  |  |
| min_reference_creatinine_datetime | VARCHAR |  |  |
| min_reference_creatinine | REAL |  |  |
| max_reference_creatinine_datetime | VARCHAR |  |  |
| max_reference_creatinine | REAL |  |  |
| first_creatinine_datetime | VARCHAR |  |  |
| first_creatinine_value | REAL |  |  |
| last_creatinine_datetime | VARCHAR |  |  |
| last_creatinine_value | REAL |  |  |
| min_creatinine_datetime | VARCHAR |  |  |
| min_creatinine | REAL |  |  |
| max_creatinine_datetime | VARCHAR |  |  |
| max_creatinine | REAL |  |  |
| number_of_aki_episodes | REAL |  |  |
| days_in_stage_1 | REAL |  |  |
| days_in_stage_2 | REAL |  |  |
| days_in_stage_3 | REAL |  |  |
| days_in_stage_3_rrt | REAL |  |  |
| worst_aki_stage_date | DATE |  |  |
| worst_aki_staging | VARCHAR |  |  |
| discharge_aki_status | REAL |  |  |
| discharge_aki_stage | VARCHAR |  |  |
| aki_overall | REAL |  |  |
| first_rrt_datetime_record | VARCHAR |  |  |
| last_rrt_datetime_record | VARCHAR |  |  |
| recurrent_aki | REAL |  |  |
| aki_early_3d | INT |  |  |
| worst_aki_stage_3d | VARCHAR |  |  |
| episode_1 | VARCHAR |  |  |
| worst_aki_stage_in_episode_1 | VARCHAR |  |  |
| episode_2 | VARCHAR |  |  |
| worst_aki_stage_in_episode_2 | VARCHAR |  |  |
| episode_3 | VARCHAR |  |  |
| worst_aki_stage_in_episode_3 | VARCHAR |  |  |
| episode_4 | VARCHAR |  |  |
| worst_aki_stage_in_episode_4 | VARCHAR |  |  |
| rrt_overall | INT |  |  |
| rrt_24h | INT |  |  |
| aki_recovery | REAL |  |  |
| paki | REAL |  |  |
| overall_type | VARCHAR |  |  |
| akd_greater_than_7_days | INT |  |  |
| aki_recovery_undetermined | VARCHAR |  |  |
| death_date_combined | DATE |  |  |
| hospital_mortality | VARCHAR |  |  |
| mort_status_30d | INT |  |  |
| mort_status_90d | INT |  |  |
| mort_status_6m | INT |  |  |
| mort_status_1y | INT |  |  |
| mort_status_2y | INT |  |  |
| mort_status_3y | INT |  |  |
| dischg_place | VARCHAR |  |  |

### Table: 16_merged_enc_id_without_race_correction_v2_final_aki_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10590_m_15 |  |
| inferred_specimen_datetime | VARCHAR | 2016-06-26 04:40:00 |  |
| lab_result | REAL | 0.67 |  |
| specimen_date | DATE | 2019-03-24 |  |
| admit_datetime | VARCHAR | 2015-07-06 15:42:00 |  |
| dischg_datetime | VARCHAR | 2015-09-28 15:21:00 |  |
| age | REAL | 56.50218690322183 |  |
| sex | VARCHAR | MALE |  |
| race | VARCHAR | WHITE |  |
| reference_creatinine | REAL | 0.73 |  |
| mdrd | REAL | 1.1431091836288865 |  |
| ckd | VARCHAR | 0 |  |
| final_class | VARCHAR | No CKD by Medical History Or Creatinine Criteria |  |
| minimum_creatinine_past_48h | REAL | 0.66 |  |
| minimum_creatinine_past_7d | REAL | 0.66 |  |
| creatinine_increase_greater_03 | INT | 0 |  |
| recent_rrt_time_7_days | VARCHAR |  |  |
| under_rrt | INT | 0 |  |
| creatinine_greater_4 | INT | 0 |  |
| elsp_days | REAL | 0.0 |  |
| lab_ref_cr_ration_greater_1_5 | INT | 0 |  |
| aki_flag | REAL | 0.0 |  |
| aki_stage | VARCHAR |  |  |
| kegfr | REAL |  |  |
| aki | VARCHAR | No AKI |  |
| egfr | REAL | 131.7811797852978 |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10590 |  |
| encounter_effective_date | DATE | 2016-06-02 |  |

### Table: 17_merged_enc_id_without_race_correction_v2_rrt_summary_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10590_m_15 |  |
| rrt_overall | INT | 0 |  |
| rrt_24h | INT | 0 |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1001 |  |
| encounter_effective_date | DATE | 2016-05-09 |  |

### Table: 20_merged_enc_id_with_race_correction_final_aki_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10590_m_15 |  |
| inferred_specimen_datetime | VARCHAR | 2016-06-26 04:40:00 |  |
| lab_result | REAL | 0.67 |  |
| specimen_date | DATE | 2019-03-24 |  |
| admit_datetime | VARCHAR | 2015-07-06 15:42:00 |  |
| dischg_datetime | VARCHAR | 2015-09-28 15:21:00 |  |
| age | REAL | 56.50218690322183 |  |
| sex | VARCHAR | MALE |  |
| race | VARCHAR | WHITE |  |
| reference_creatinine | REAL | 1.4 |  |
| mdrd | REAL | 1.2745143141125743 |  |
| ckd | VARCHAR | 0 |  |
| final_class | VARCHAR | No CKD by Medical History Or Creatinine Criteria |  |
| minimum_creatinine_past_48h | REAL | 0.66 |  |
| minimum_creatinine_past_7d | REAL | 0.66 |  |
| creatinine_increase_greater_03 | INT | 0 |  |
| recent_rrt_time_7_days | VARCHAR |  |  |
| under_rrt | INT | 0 |  |
| creatinine_greater_4 | INT | 0 |  |
| elsp_days | REAL | 0.0 |  |
| lab_ref_cr_ration_greater_1_5 | INT | 0 |  |
| aki_flag | REAL | 0.0 |  |
| aki_stage | VARCHAR |  |  |
| kegfr | REAL |  |  |
| aki | VARCHAR | No AKI |  |
| egfr | REAL | 131.7811797852978 |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10590 |  |
| encounter_effective_date | DATE | 2016-06-02 |  |

### Table: 23_merged_enc_id_with_race_correction_ckd_summary_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1001 |  |
| merged_enc_id | VARCHAR |  |  |
| admit_datetime | VARCHAR | 2012-12-01 00:01:00 |  |
| dischg_datetime | VARCHAR | 2013-01-31 23:59:00 |  |
| sex | VARCHAR | FEMALE |  |
| race | VARCHAR | WHITE |  |
| ethnicity | VARCHAR | NOT HISPANIC |  |
| patient_type | VARCHAR | EMERGENCY |  |
| birth_date | DATE | 1965-03-24 |  |
| icd9_10flag_diagnosis | INT | 1 |  |
| icd9_10flag_procedures | INT | 1 |  |
| finalicd910 | INT | 1 |  |
| aki_admin_flag | INT | 0 |  |
| aki_code | VARCHAR |  |  |
| aki_code_date | DATE |  |  |
| aki_icd_type | VARCHAR |  |  |
| aki_cpt_code | EMPTY |  |  |
| aki_cpt_date | EMPTY |  |  |
| dialysis_admin_flag | INT | 0 |  |
| dialysis_code | VARCHAR |  |  |
| dialysis_code_date | DATE |  |  |
| dialysis_icd_type | VARCHAR |  |  |
| dialysis_cpt_code | REAL |  |  |
| dialysis_cpt_date | DATE |  |  |
| kidneytransplant_admin_flag | INT | 0 |  |
| kidney_transplant_code | VARCHAR |  |  |
| kidneytransplant_code_date | DATE |  |  |
| kidney_transplant_icd_type | VARCHAR |  |  |
| kidney_transplant_cpt_code | REAL |  |  |
| kidneytransplant_cpt_date | DATE |  |  |
| ckd_admin_flag | INT | 0 |  |
| ckd_code | VARCHAR |  |  |
| ckd_code_date | DATE |  |  |
| ckd_icd_type | VARCHAR |  |  |
| ckd_cpt_code | EMPTY |  |  |
| ckd_cpt_date | EMPTY |  |  |
| esrd_admin_flag | INT | 0 |  |
| esrd_code | VARCHAR |  |  |
| esrd_code_date | DATE |  |  |
| esrd_icd_type | VARCHAR |  |  |
| esrd_cpt_code | EMPTY |  |  |
| esrd_cpt_date | EMPTY |  |  |
| previous_creatinine_flag | INT | 1 |  |
| uncertain_ckd | INT | 1 |  |
| insufficient_data_flag | REAL | 0.0 |  |
| egfr_90d_apart_p30d | REAL | 0.0 |  |
| egfr_90d_apart_p30d_date | VARCHAR |  |  |
| egfr_30d | REAL |  |  |
| egfr_30d_date | DATE |  |  |
| admission_creatinine | REAL |  |  |
| min_7_days | REAL |  |  |
| min_7_days_date | DATE |  |  |
| medium_8_365_days | REAL |  |  |
| medium_8_365_days_date | DATE |  |  |
| age | REAL | 62.63783650588308 |  |
| mdrd | REAL | 1.236078412884431 |  |
| final_class | VARCHAR | No CKD by Medical History Or Creatinine Criteria |  |
| egfr_staging | VARCHAR |  |  |
| reference_creatinine | REAL | 0.76 |  |
| method | VARCHAR | medium_8_365_days |  |
| egfr | REAL |  |  |
| ckd | VARCHAR | 0 |  |

### Table: 24_merged_enc_id_without_race_correction_v2_aki_daily_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10686_m_9 |  |
| specimen_date | DATE | 2016-06-25 |  |
| aki_flag | REAL | 0.0 |  |
| aki_stage | VARCHAR |  |  |
| episode | REAL |  |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10686 |  |
| encounter_effective_date | DATE | 2016-06-02 |  |

### Table: 26_merged_enc_id_with_race_correction_ckd_noesrd_summary_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1073 |  |
| merged_enc_id | VARCHAR |  |  |
| admit_datetime | VARCHAR | 2012-12-01 00:01:00 |  |
| dischg_datetime | VARCHAR | 2013-01-31 23:59:00 |  |
| sex | VARCHAR | FEMALE |  |
| race | VARCHAR | WHITE |  |
| ethnicity | VARCHAR | NOT HISPANIC |  |
| patient_type | VARCHAR | EMERGENCY |  |
| birth_date | DATE | 1981-10-07 |  |
| icd9_10flag_diagnosis | INT | 1 |  |
| icd9_10flag_procedures | INT | 1 |  |
| finalicd910 | INT | 1 |  |
| aki_admin_flag | INT | 0 |  |
| aki_code | VARCHAR |  |  |
| aki_code_date | DATE |  |  |
| aki_icd_type | VARCHAR |  |  |
| aki_cpt_code | EMPTY |  |  |
| aki_cpt_date | EMPTY |  |  |
| dialysis_admin_flag | INT | 0 |  |
| dialysis_code | VARCHAR |  |  |
| dialysis_code_date | DATE |  |  |
| dialysis_icd_type | VARCHAR |  |  |
| dialysis_cpt_code | REAL |  |  |
| dialysis_cpt_date | DATE |  |  |
| kidneytransplant_admin_flag | INT | 0 |  |
| kidney_transplant_code | VARCHAR |  |  |
| kidneytransplant_code_date | DATE |  |  |
| kidney_transplant_icd_type | VARCHAR |  |  |
| kidney_transplant_cpt_code | REAL |  |  |
| kidneytransplant_cpt_date | DATE |  |  |
| ckd_admin_flag | INT | 0 |  |
| ckd_code | VARCHAR |  |  |
| ckd_code_date | DATE |  |  |
| ckd_icd_type | VARCHAR |  |  |
| ckd_cpt_code | EMPTY |  |  |
| ckd_cpt_date | EMPTY |  |  |
| esrd_admin_flag | INT | 0 |  |
| esrd_code | VARCHAR |  |  |
| esrd_code_date | DATE |  |  |
| esrd_icd_type | VARCHAR |  |  |
| esrd_cpt_code | EMPTY |  |  |
| esrd_cpt_date | EMPTY |  |  |
| previous_creatinine_flag | INT | 1 |  |
| uncertain_ckd | INT | 1 |  |
| insufficient_data_flag | REAL | 0.0 |  |
| egfr_90d_apart_p30d | REAL | 0.0 |  |
| egfr_90d_apart_p30d_date | VARCHAR |  |  |
| egfr_30d | REAL |  |  |
| egfr_30d_date | DATE |  |  |
| admission_creatinine | REAL |  |  |
| min_7_days | REAL |  |  |
| min_7_days_date | DATE |  |  |
| medium_8_365_days | REAL |  |  |
| medium_8_365_days_date | DATE |  |  |
| age | REAL | 62.63783650588308 |  |
| mdrd | REAL | 1.0427411148595402 |  |
| final_class | VARCHAR | No CKD by Medical History Or Creatinine Criteria |  |
| egfr_staging | VARCHAR |  |  |
| reference_creatinine | REAL | 0.74 |  |
| method | VARCHAR | medium_8_365_days |  |
| egfr | REAL |  |  |
| ckd | VARCHAR | 0 |  |

### Table: 28_merged_enc_id_with_race_correction_aki_trajectory_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10590_m_15 |  |
| aki_overall | REAL | 0.0 |  |
| aki_recovery | REAL |  |  |
| paki | REAL |  |  |
| dischg_place | VARCHAR | Home/Rehab |  |
| overall_type | VARCHAR | No AKI |  |
| akd_greater_than_7_days | INT | 0 |  |
| aki_recovery_undetermined | VARCHAR |  |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1073 |  |
| encounter_effective_date | DATE | 2016-03-03 |  |

### Table: 32_merged_enc_id_with_race_correction_ckd_aki_master_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10453 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10590_m_15 |  |
| encounter_effective_date | DATE | 2020-03-26 |  |
| admit_datetime | VARCHAR |  |  |
| dischg_datetime | VARCHAR |  |  |
| sex | VARCHAR |  |  |
| race | VARCHAR |  |  |
| ethnicity | VARCHAR |  |  |
| patient_type | VARCHAR |  |  |
| birth_date | DATE |  |  |
| icd9_10flag_diagnosis | INT |  |  |
| icd9_10flag_procedures | INT |  |  |
| finalicd910 | INT |  |  |
| aki_admin_flag | INT |  |  |
| aki_code | VARCHAR |  |  |
| aki_code_date | DATE |  |  |
| aki_icd_type | VARCHAR |  |  |
| aki_cpt_code | EMPTY |  |  |
| aki_cpt_date | EMPTY |  |  |
| dialysis_admin_flag | INT |  |  |
| dialysis_code | VARCHAR |  |  |
| dialysis_code_date | DATE |  |  |
| dialysis_icd_type | VARCHAR |  |  |
| dialysis_cpt_code | REAL |  |  |
| dialysis_cpt_date | DATE |  |  |
| kidneytransplant_admin_flag | INT |  |  |
| kidney_transplant_code | VARCHAR |  |  |
| kidneytransplant_code_date | DATE |  |  |
| kidney_transplant_icd_type | VARCHAR |  |  |
| kidney_transplant_cpt_code | REAL |  |  |
| kidneytransplant_cpt_date | DATE |  |  |
| ckd_admin_flag | INT |  |  |
| ckd_code | VARCHAR |  |  |
| ckd_code_date | DATE |  |  |
| ckd_icd_type | VARCHAR |  |  |
| ckd_cpt_code | EMPTY |  |  |
| ckd_cpt_date | EMPTY |  |  |
| esrd_admin_flag | INT |  |  |
| esrd_code | VARCHAR |  |  |
| esrd_code_date | DATE |  |  |
| esrd_icd_type | VARCHAR |  |  |
| esrd_cpt_code | EMPTY |  |  |
| esrd_cpt_date | EMPTY |  |  |
| previous_creatinine_flag | INT |  |  |
| uncertain_ckd | INT |  |  |
| insufficient_data_flag | REAL |  |  |
| egfr_90d_apart_p30d | REAL |  |  |
| egfr_90d_apart_p30d_date | VARCHAR |  |  |
| egfr_30d | REAL |  |  |
| egfr_30d_date | DATE |  |  |
| admission_creatinine | REAL |  |  |
| min_7_days | REAL |  |  |
| min_7_days_date | DATE |  |  |
| medium_8_365_days | REAL |  |  |
| medium_8_365_days_date | DATE |  |  |
| age | REAL |  |  |
| mdrd | REAL |  |  |
| final_class | VARCHAR |  |  |
| egfr_staging | VARCHAR |  |  |
| reference_creatinine | REAL |  |  |
| method | VARCHAR |  |  |
| egfr | REAL |  |  |
| ckd | VARCHAR |  |  |
| first_aki_date | DATE |  |  |
| min_reference_creatinine_datetime | VARCHAR |  |  |
| min_reference_creatinine | REAL |  |  |
| max_reference_creatinine_datetime | VARCHAR |  |  |
| max_reference_creatinine | REAL |  |  |
| first_creatinine_datetime | VARCHAR |  |  |
| first_creatinine_value | REAL |  |  |
| last_creatinine_datetime | VARCHAR |  |  |
| last_creatinine_value | REAL |  |  |
| min_creatinine_datetime | VARCHAR |  |  |
| min_creatinine | REAL |  |  |
| max_creatinine_datetime | VARCHAR |  |  |
| max_creatinine | REAL |  |  |
| number_of_aki_episodes | REAL |  |  |
| days_in_stage_1 | REAL |  |  |
| days_in_stage_2 | REAL |  |  |
| days_in_stage_3 | REAL |  |  |
| days_in_stage_3_rrt | REAL |  |  |
| worst_aki_stage_date | DATE |  |  |
| worst_aki_staging | VARCHAR |  |  |
| discharge_aki_status | REAL |  |  |
| discharge_aki_stage | VARCHAR |  |  |
| aki_overall | REAL |  |  |
| first_rrt_datetime_record | VARCHAR |  |  |
| last_rrt_datetime_record | VARCHAR |  |  |
| recurrent_aki | REAL |  |  |
| aki_early_3d | INT |  |  |
| worst_aki_stage_3d | VARCHAR |  |  |
| episode_1 | VARCHAR |  |  |
| worst_aki_stage_in_episode_1 | VARCHAR |  |  |
| episode_2 | VARCHAR |  |  |
| worst_aki_stage_in_episode_2 | VARCHAR |  |  |
| episode_3 | VARCHAR |  |  |
| worst_aki_stage_in_episode_3 | VARCHAR |  |  |
| episode_4 | VARCHAR |  |  |
| worst_aki_stage_in_episode_4 | VARCHAR |  |  |
| rrt_overall | INT |  |  |
| rrt_24h | INT |  |  |
| aki_recovery | REAL |  |  |
| paki | REAL |  |  |
| overall_type | VARCHAR |  |  |
| akd_greater_than_7_days | INT |  |  |
| aki_recovery_undetermined | VARCHAR |  |  |
| death_date_combined | DATE |  |  |
| hospital_mortality | VARCHAR |  |  |
| mort_status_30d | INT |  |  |
| mort_status_90d | INT |  |  |
| mort_status_6m | INT |  |  |
| mort_status_1y | INT |  |  |
| mort_status_2y | INT |  |  |
| mort_status_3y | INT |  |  |
| dischg_place | VARCHAR |  |  |

### Table: 36_merged_enc_id_with_race_correction_aki_summary_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1073 |  |
| merged_enc_id | VARCHAR |  |  |
| admit_datetime | VARCHAR |  |  |
| dischg_datetime | VARCHAR |  |  |
| sex | VARCHAR | MALE |  |
| race | VARCHAR | WHITE |  |
| age | REAL |  |  |
| final_class | VARCHAR | No CKD by Medical History Or Creatinine Criteria |  |
| egfr | REAL |  |  |
| mdrd | REAL |  |  |
| first_aki_date | DATE |  |  |
| min_reference_creatinine_datetime | VARCHAR |  |  |
| min_reference_creatinine | REAL | 0.74 |  |
| max_reference_creatinine_datetime | VARCHAR |  |  |
| max_reference_creatinine | REAL | 0.72 |  |
| first_creatinine_datetime | VARCHAR |  |  |
| first_creatinine_value | REAL | 0.82 |  |
| last_creatinine_datetime | VARCHAR |  |  |
| last_creatinine_value | REAL | 0.82 |  |
| min_creatinine_datetime | VARCHAR |  |  |
| min_creatinine | REAL | 0.82 |  |
| max_creatinine_datetime | VARCHAR |  |  |
| max_creatinine | REAL | 0.82 |  |
| number_of_aki_episodes | REAL | 0.0 |  |
| days_in_stage_1 | REAL | 0.0 |  |
| days_in_stage_2 | REAL | 0.0 |  |
| days_in_stage_3 | REAL | 0.0 |  |
| days_in_stage_3_rrt | REAL | 0.0 |  |
| worst_aki_stage_date | DATE |  |  |
| worst_aki_staging | VARCHAR |  |  |
| discharge_aki_status | REAL | 0.0 |  |
| discharge_aki_stage | VARCHAR |  |  |
| aki_overall | REAL | 0.0 |  |
| first_rrt_datetime_record | VARCHAR |  |  |
| last_rrt_datetime_record | VARCHAR |  |  |
| recurrent_aki | REAL |  |  |
| aki_early_3d | INT | 0 |  |
| worst_aki_stage_3d | VARCHAR |  |  |
| episode_1 | VARCHAR |  |  |
| worst_aki_stage_in_episode_1 | VARCHAR |  |  |
| episode_2 | VARCHAR |  |  |
| worst_aki_stage_in_episode_2 | VARCHAR |  |  |
| episode_3 | VARCHAR |  |  |
| worst_aki_stage_in_episode_3 | VARCHAR |  |  |
| episode_4 | VARCHAR |  |  |
| worst_aki_stage_in_episode_4 | VARCHAR |  |  |

### Table: 53_merged_enc_id_without_race_correction_v2_ckd_summary_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1001 |  |
| merged_enc_id | VARCHAR |  |  |
| admit_datetime | VARCHAR | 2012-12-01 00:01:00 |  |
| dischg_datetime | VARCHAR | 2013-01-31 23:59:00 |  |
| sex | VARCHAR | FEMALE |  |
| race | VARCHAR | WHITE |  |
| ethnicity | VARCHAR | NOT HISPANIC |  |
| patient_type | VARCHAR | EMERGENCY |  |
| birth_date | DATE | 1965-03-24 |  |
| icd9_10flag_diagnosis | INT | 1 |  |
| icd9_10flag_procedures | INT | 1 |  |
| finalicd910 | INT | 1 |  |
| aki_admin_flag | INT | 0 |  |
| aki_code | VARCHAR |  |  |
| aki_code_date | DATE |  |  |
| aki_icd_type | VARCHAR |  |  |
| aki_cpt_code | EMPTY |  |  |
| aki_cpt_date | EMPTY |  |  |
| dialysis_admin_flag | INT | 0 |  |
| dialysis_code | VARCHAR |  |  |
| dialysis_code_date | DATE |  |  |
| dialysis_icd_type | VARCHAR |  |  |
| dialysis_cpt_code | REAL |  |  |
| dialysis_cpt_date | DATE |  |  |
| kidneytransplant_admin_flag | INT | 0 |  |
| kidney_transplant_code | VARCHAR |  |  |
| kidneytransplant_code_date | DATE |  |  |
| kidney_transplant_icd_type | VARCHAR |  |  |
| kidney_transplant_cpt_code | REAL |  |  |
| kidneytransplant_cpt_date | DATE |  |  |
| ckd_admin_flag | INT | 0 |  |
| ckd_code | VARCHAR |  |  |
| ckd_code_date | DATE |  |  |
| ckd_icd_type | VARCHAR |  |  |
| ckd_cpt_code | EMPTY |  |  |
| ckd_cpt_date | EMPTY |  |  |
| esrd_admin_flag | INT | 0 |  |
| esrd_code | VARCHAR |  |  |
| esrd_code_date | DATE |  |  |
| esrd_icd_type | VARCHAR |  |  |
| esrd_cpt_code | EMPTY |  |  |
| esrd_cpt_date | EMPTY |  |  |
| previous_creatinine_flag | INT | 1 |  |
| uncertain_ckd | INT | 1 |  |
| insufficient_data_flag | REAL | 0.0 |  |
| egfr_90d_apart_p30d | REAL | 0.0 |  |
| egfr_90d_apart_p30d_date | VARCHAR |  |  |
| egfr_30d | REAL |  |  |
| egfr_30d_date | DATE |  |  |
| admission_creatinine | REAL |  |  |
| min_7_days | REAL |  |  |
| min_7_days_date | DATE |  |  |
| medium_8_365_days | REAL |  |  |
| medium_8_365_days_date | DATE |  |  |
| age | REAL | 62.63783650588308 |  |
| mdrd | REAL | 0.8332302009300749 |  |
| final_class | VARCHAR | No CKD by Medical History Or Creatinine Criteria |  |
| egfr_staging | VARCHAR |  |  |
| reference_creatinine | REAL | 0.76 |  |
| method | VARCHAR | medium_8_365_days |  |
| egfr | REAL |  |  |
| ckd | VARCHAR | 0 |  |

### Table: 55_merged_enc_id_with_race_correction_aki_daily_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10686_m_9 |  |
| specimen_date | DATE | 2016-06-25 |  |
| aki_flag | REAL | 0.0 |  |
| aki_stage | VARCHAR |  |  |
| episode | REAL |  |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_10686 |  |
| encounter_effective_date | DATE | 2016-06-02 |  |

### Table: 56_merged_enc_id_with_race_correction_rrt_summary_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10590_m_15 |  |
| rrt_overall | INT | 0 |  |
| rrt_24h | INT | 0 |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1001 |  |
| encounter_effective_date | DATE | 2016-05-09 |  |

### Table: 49_all_generated_admission_variables_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| hospital | VARCHAR | JAX |  |
| encounter_effective_date | DATE | 2019-04-02 |  |
| sex | VARCHAR | FEMALE |  |
| race | VARCHAR | WHITE |  |
| ethnicity | VARCHAR | NON-HISPANIC |  |
| language | VARCHAR | ENGLISH |  |
| zip | VARCHAR | 32209 |  |
| county | VARCHAR | Duval |  |
| marital_status | VARCHAR | SINGLE |  |
| payer | VARCHAR | MEDICARE |  |
| smoking_status | VARCHAR | FORMER |  |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1001 |  |
| attend_doc | INT | 17791 |  |
| merged_enc_id | VARCHAR |  |  |
| merged_admit_datetime | VARCHAR |  |  |
| merged_dischg_datetime | VARCHAR |  |  |
| bmi | VARCHAR | MISSING |  |
| age | REAL | 57.0 |  |
| admission_source | VARCHAR | NON-TRANSFER |  |
| emergent | VARCHAR | EMERGENCY |  |
| time_to_surgery | REAL | 0.0 |  |
| admit_day | VARCHAR | Tuesday |  |
| admit_month | VARCHAR | Jan |  |
| admit_year | INT | 2019 |  |
| admit_hour | INT | 15 |  |
| night_admission | INT | 0 |  |
| total | VARCHAR | 33519 |  |
| rural | VARCHAR | 0 |  |
| median_income | VARCHAR | 21532 |  |
| perc_below_poverty | VARCHAR | 39.8 |  |
| prop_black | VARCHAR | 0.966347445 |  |
| prop_hisp | VARCHAR | 0.013425222 |  |
| distance_to_facility | VARCHAR | 0.0 |  |
| aceis_arbs | VARCHAR | 0.0 |  |
| aminoglycosides | VARCHAR | 0.0 |  |
| antiemetics | VARCHAR | 0.0 |  |
| beta_blockers | VARCHAR | 0.0 |  |
| bicarbonates | VARCHAR | 0.0 |  |
| corticosteroids | VARCHAR | 0.0 |  |
| diuretics | VARCHAR | 0.0 |  |
| nsaids | VARCHAR | 0.0 |  |
| pressors_inotropes | VARCHAR | 0.0 |  |
| vancomycin | VARCHAR | 0.0 |  |
| num_meds | VARCHAR | missing |  |
| aspirin | VARCHAR | 0.0 |  |
| statins | VARCHAR | 0.0 |  |
| nephrotoxic | VARCHAR | 0.0 |  |
| cci | INT | 0 |  |
| liverd | INT | 0 |  |
| anemia | INT | 0 |  |
| alc_drug | INT | 0 |  |
| udn | REAL | 0.0 |  |
| imi | INT | 0 |  |
| ichf | INT | 0 |  |
| ipvd | INT | 0 |  |
| icvd | INT | 0 |  |
| icpd | INT | 0 |  |
| diabetes | INT | 0 |  |
| icancer | INT | 0 |  |
| imcancer | INT | 0 |  |
| valve | INT | 0 |  |
| htn_c | INT | 0 |  |
| hypothy | INT | 0 |  |
| coag | INT | 0 |  |
| obese | INT | 0 |  |
| wghtloss | INT | 0 |  |
| lytes | INT | 0 |  |
| depress | INT | 0 |  |
| serum_ph_present_0_7 | REAL | 0.0 |  |
| serum_ph_present_8_365 | REAL | 0.0 |  |
| count_rbcurn_0_7 | REAL | 0.0 |  |
| rbcur_0_7 | VARCHAR | missing |  |
| count_rbcurn_8_365 | REAL | 0.0 |  |
| rbcur_8_365 | VARCHAR | missing |  |
| count_gluurnn_0_7 | REAL | 0.0 |  |
| gluurn_0_7 | VARCHAR | missing |  |
| count_gluurnn_8_365 | REAL | 0.0 |  |
| gluurn_8_365 | VARCHAR | missing |  |
| count_hgburn_0_7 | REAL | 0.0 |  |
| hgbur_0_7 | VARCHAR | missing |  |
| count_hgburn_8_365 | REAL | 0.0 |  |
| hgbur_8_365 | VARCHAR | missing |  |
| count_uapn_0_7 | REAL | 0.0 |  |
| uap_0_7 | VARCHAR | missing |  |
| count_uapn_8_365 | REAL | 0.0 |  |
| uap_8_365 | VARCHAR | missing |  |
| hgb_min_0_7 | VARCHAR | missing |  |
| hgb_max_0_7 | VARCHAR | missing |  |
| hgb_mean_0_7 | VARCHAR | missing |  |
| hgb_var_0_7 | VARCHAR | missing |  |
| count_hgb_0_7 | REAL | 0.0 |  |
| hgb_min_8_365 | VARCHAR | missing |  |
| hgb_max_8_365 | VARCHAR | missing |  |
| hgb_mean_8_365 | VARCHAR | missing |  |
| hgb_var_8_365 | VARCHAR | missing |  |
| count_hgb_8_365 | REAL | 0.0 |  |
| serum_na_min_0_7 | VARCHAR | missing |  |
| serum_na_max_0_7 | VARCHAR | missing |  |
| serum_na_mean_0_7 | VARCHAR | missing |  |
| serum_na_var_0_7 | VARCHAR | missing |  |
| count_serum_na_0_7 | REAL | 0.0 |  |
| serum_na_min_8_365 | VARCHAR | missing |  |
| serum_na_max_8_365 | VARCHAR | missing |  |
| serum_na_mean_8_365 | VARCHAR | missing |  |
| serum_na_var_8_365 | VARCHAR | missing |  |
| count_serum_na_8_365 | REAL | 0.0 |  |
| rdw_min_0_7 | VARCHAR | missing |  |
| rdw_max_0_7 | VARCHAR | missing |  |
| rdw_mean_0_7 | VARCHAR | missing |  |
| rdw_var_0_7 | VARCHAR | missing |  |
| count_rdw_0_7 | REAL | 0.0 |  |
| rdw_min_8_365 | VARCHAR | missing |  |
| rdw_max_8_365 | VARCHAR | missing |  |
| rdw_mean_8_365 | VARCHAR | missing |  |
| rdw_var_8_365 | VARCHAR | missing |  |
| count_rdw_8_365 | REAL | 0.0 |  |
| serum_anion_gap_min_0_7 | VARCHAR | missing |  |
| serum_anion_gap_max_0_7 | VARCHAR | missing |  |
| serum_anion_gap_mean_0_7 | VARCHAR | missing |  |
| serum_anion_gap_var_0_7 | VARCHAR | missing |  |
| count_serum_anion_gap_0_7 | REAL | 0.0 |  |
| serum_anion_gap_min_8_365 | VARCHAR | missing |  |
| serum_anion_gap_max_8_365 | VARCHAR | missing |  |
| serum_anion_gap_mean_8_365 | VARCHAR | missing |  |
| serum_anion_gap_var_8_365 | VARCHAR | missing |  |
| count_serum_anion_gap_8_365 | REAL | 0.0 |  |
| wbc_min_0_7 | VARCHAR | missing |  |
| wbc_max_0_7 | VARCHAR | missing |  |
| wbc_mean_0_7 | VARCHAR | missing |  |
| wbc_var_0_7 | VARCHAR | missing |  |
| count_wbc_0_7 | REAL | 0.0 |  |
| wbc_min_8_365 | VARCHAR | missing |  |
| wbc_max_8_365 | VARCHAR | missing |  |
| wbc_mean_8_365 | VARCHAR | missing |  |
| wbc_var_8_365 | VARCHAR | missing |  |
| count_wbc_8_365 | REAL | 0.0 |  |
| serum_creatinine_min_0_7 | VARCHAR | missing |  |
| serum_creatinine_max_0_7 | VARCHAR | missing |  |
| serum_creatinine_mean_0_7 | VARCHAR | missing |  |
| serum_creatinine_var_0_7 | VARCHAR | missing |  |
| count_serum_creatinine_0_7 | REAL | 0.0 |  |
| serum_creatinine_min_8_365 | VARCHAR | missing |  |
| serum_creatinine_max_8_365 | VARCHAR | missing |  |
| serum_creatinine_mean_8_365 | VARCHAR | missing |  |
| serum_creatinine_var_8_365 | VARCHAR | missing |  |
| count_serum_creatinine_8_365 | REAL | 0.0 |  |
| hct_min_0_7 | VARCHAR | missing |  |
| hct_max_0_7 | VARCHAR | missing |  |
| hct_mean_0_7 | VARCHAR | missing |  |
| hct_var_0_7 | VARCHAR | missing |  |
| count_hct_0_7 | REAL | 0.0 |  |
| hct_min_8_365 | VARCHAR | missing |  |
| hct_max_8_365 | VARCHAR | missing |  |
| hct_mean_8_365 | VARCHAR | missing |  |
| hct_var_8_365 | VARCHAR | missing |  |
| count_hct_8_365 | REAL | 0.0 |  |
| plt_min_0_7 | VARCHAR | missing |  |
| plt_max_0_7 | VARCHAR | missing |  |
| plt_mean_0_7 | VARCHAR | missing |  |
| plt_var_0_7 | VARCHAR | missing |  |
| count_plt_0_7 | REAL | 0.0 |  |
| plt_min_8_365 | VARCHAR | missing |  |
| plt_max_8_365 | VARCHAR | missing |  |
| plt_mean_8_365 | VARCHAR | missing |  |
| plt_var_8_365 | VARCHAR | missing |  |
| count_plt_8_365 | REAL | 0.0 |  |
| rbc_mcv_min_0_7 | VARCHAR | missing |  |
| rbc_mcv_max_0_7 | VARCHAR | missing |  |
| rbc_mcv_mean_0_7 | VARCHAR | missing |  |
| rbc_mcv_var_0_7 | VARCHAR | missing |  |
| count_rbc_mcv_0_7 | REAL | 0.0 |  |
| rbc_mcv_min_8_365 | VARCHAR | missing |  |
| rbc_mcv_max_8_365 | VARCHAR | missing |  |
| rbc_mcv_mean_8_365 | VARCHAR | missing |  |
| rbc_mcv_var_8_365 | VARCHAR | missing |  |
| count_rbc_mcv_8_365 | REAL | 0.0 |  |
| mpv_min_0_7 | VARCHAR | missing |  |
| mpv_max_0_7 | VARCHAR | missing |  |
| mpv_mean_0_7 | VARCHAR | missing |  |
| mpv_var_0_7 | VARCHAR | missing |  |
| count_mpv_0_7 | REAL | 0.0 |  |
| mpv_min_8_365 | VARCHAR | missing |  |
| mpv_max_8_365 | VARCHAR | missing |  |
| mpv_mean_8_365 | VARCHAR | missing |  |
| mpv_var_8_365 | VARCHAR | missing |  |
| count_mpv_8_365 | REAL | 0.0 |  |
| serum_glucose_min_0_7 | VARCHAR | missing |  |
| serum_glucose_max_0_7 | VARCHAR | missing |  |
| serum_glucose_mean_0_7 | VARCHAR | missing |  |
| serum_glucose_var_0_7 | VARCHAR | missing |  |
| count_serum_glucose_0_7 | REAL | 0.0 |  |
| serum_glucose_min_8_365 | VARCHAR | missing |  |
| serum_glucose_max_8_365 | VARCHAR | missing |  |
| serum_glucose_mean_8_365 | VARCHAR | missing |  |
| serum_glucose_var_8_365 | VARCHAR | missing |  |
| count_serum_glucose_8_365 | REAL | 0.0 |  |
| rbc_min_0_7 | VARCHAR | missing |  |
| rbc_max_0_7 | VARCHAR | missing |  |
| rbc_mean_0_7 | VARCHAR | missing |  |
| rbc_var_0_7 | VARCHAR | missing |  |
| count_rbc_0_7 | REAL | 0.0 |  |
| rbc_min_8_365 | VARCHAR | missing |  |
| rbc_max_8_365 | VARCHAR | missing |  |
| rbc_mean_8_365 | VARCHAR | missing |  |
| rbc_var_8_365 | VARCHAR | missing |  |
| count_rbc_8_365 | REAL | 0.0 |  |
| serum_alanine_min_0_7 | VARCHAR | missing |  |
| serum_alanine_max_0_7 | VARCHAR | missing |  |
| serum_alanine_mean_0_7 | VARCHAR | missing |  |
| serum_alanine_var_0_7 | VARCHAR | missing |  |
| count_serum_alanine_0_7 | REAL | 0.0 |  |
| serum_alanine_min_8_365 | VARCHAR | missing |  |
| serum_alanine_max_8_365 | VARCHAR | missing |  |
| serum_alanine_mean_8_365 | VARCHAR | missing |  |
| serum_alanine_var_8_365 | VARCHAR | missing |  |
| count_serum_alanine_8_365 | REAL | 0.0 |  |
| serum_asparate_min_0_7 | VARCHAR | missing |  |
| serum_asparate_max_0_7 | VARCHAR | missing |  |
| serum_asparate_mean_0_7 | VARCHAR | missing |  |
| serum_asparate_var_0_7 | VARCHAR | missing |  |
| count_serum_asparate_0_7 | REAL | 0.0 |  |
| serum_asparate_min_8_365 | VARCHAR | missing |  |
| serum_asparate_max_8_365 | VARCHAR | missing |  |
| serum_asparate_mean_8_365 | VARCHAR | missing |  |
| serum_asparate_var_8_365 | VARCHAR | missing |  |
| count_serum_asparate_8_365 | REAL | 0.0 |  |
| serum_co2_min_0_7 | VARCHAR | missing |  |
| serum_co2_max_0_7 | VARCHAR | missing |  |
| serum_co2_mean_0_7 | VARCHAR | missing |  |
| serum_co2_var_0_7 | VARCHAR | missing |  |
| count_serum_co2_0_7 | REAL | 0.0 |  |
| serum_co2_min_8_365 | VARCHAR | missing |  |
| serum_co2_max_8_365 | VARCHAR | missing |  |
| serum_co2_mean_8_365 | VARCHAR | missing |  |
| serum_co2_var_8_365 | VARCHAR | missing |  |
| count_serum_co2_8_365 | REAL | 0.0 |  |
| serum_k_min_0_7 | VARCHAR | missing |  |
| serum_k_max_0_7 | VARCHAR | missing |  |
| serum_k_mean_0_7 | VARCHAR | missing |  |
| serum_k_var_0_7 | VARCHAR | missing |  |
| count_serum_k_0_7 | REAL | 0.0 |  |
| serum_k_min_8_365 | VARCHAR | missing |  |
| serum_k_max_8_365 | VARCHAR | missing |  |
| serum_k_mean_8_365 | VARCHAR | missing |  |
| serum_k_var_8_365 | VARCHAR | missing |  |
| count_serum_k_8_365 | REAL | 0.0 |  |
| bun_min_0_7 | VARCHAR | missing |  |
| bun_max_0_7 | VARCHAR | missing |  |
| bun_mean_0_7 | VARCHAR | missing |  |
| bun_var_0_7 | VARCHAR | missing |  |
| count_bun_0_7 | REAL | 0.0 |  |
| bun_min_8_365 | VARCHAR | missing |  |
| bun_max_8_365 | VARCHAR | missing |  |
| bun_mean_8_365 | VARCHAR | missing |  |
| bun_var_8_365 | VARCHAR | missing |  |
| count_bun_8_365 | REAL | 0.0 |  |
| serum_ca_min_0_7 | VARCHAR | missing |  |
| serum_ca_max_0_7 | VARCHAR | missing |  |
| serum_ca_mean_0_7 | VARCHAR | missing |  |
| serum_ca_var_0_7 | VARCHAR | missing |  |
| count_serum_ca_0_7 | REAL | 0.0 |  |
| serum_ca_min_8_365 | VARCHAR | missing |  |
| serum_ca_max_8_365 | VARCHAR | missing |  |
| serum_ca_mean_8_365 | VARCHAR | missing |  |
| serum_ca_var_8_365 | VARCHAR | missing |  |
| count_serum_ca_8_365 | REAL | 0.0 |  |
| serum_cl_min_0_7 | VARCHAR | missing |  |
| serum_cl_max_0_7 | VARCHAR | missing |  |
| serum_cl_mean_0_7 | VARCHAR | missing |  |
| serum_cl_var_0_7 | VARCHAR | missing |  |
| count_serum_cl_0_7 | REAL | 0.0 |  |
| serum_cl_min_8_365 | VARCHAR | missing |  |
| serum_cl_max_8_365 | VARCHAR | missing |  |
| serum_cl_mean_8_365 | VARCHAR | missing |  |
| serum_cl_var_8_365 | VARCHAR | missing |  |
| count_serum_cl_8_365 | REAL | 0.0 |  |
| serum_band_min_0_7 | VARCHAR | missing |  |
| serum_band_max_0_7 | VARCHAR | missing |  |
| serum_band_mean_0_7 | VARCHAR | missing |  |
| serum_band_var_0_7 | VARCHAR | missing |  |
| count_serum_band_0_7 | REAL | 0.0 |  |
| serum_band_min_8_365 | VARCHAR | missing |  |
| serum_band_max_8_365 | VARCHAR | missing |  |
| serum_band_mean_8_365 | VARCHAR | missing |  |
| serum_band_var_8_365 | VARCHAR | missing |  |
| count_serum_band_8_365 | REAL | 0.0 |  |
| rbc_mch_min_0_7 | VARCHAR | missing |  |
| rbc_mch_max_0_7 | VARCHAR | missing |  |
| rbc_mch_mean_0_7 | VARCHAR | missing |  |
| rbc_mch_var_0_7 | VARCHAR | missing |  |
| count_rbc_mch_0_7 | REAL | 0.0 |  |
| rbc_mch_min_8_365 | VARCHAR | missing |  |
| rbc_mch_max_8_365 | VARCHAR | missing |  |
| rbc_mch_mean_8_365 | VARCHAR | missing |  |
| rbc_mch_var_8_365 | VARCHAR | missing |  |
| count_rbc_mch_8_365 | REAL | 0.0 |  |
| rbc_mchc_min_0_7 | VARCHAR | missing |  |
| rbc_mchc_max_0_7 | VARCHAR | missing |  |
| rbc_mchc_mean_0_7 | VARCHAR | missing |  |
| rbc_mchc_var_0_7 | VARCHAR | missing |  |
| count_rbc_mchc_0_7 | REAL | 0.0 |  |
| rbc_mchc_min_8_365 | VARCHAR | missing |  |
| rbc_mchc_max_8_365 | VARCHAR | missing |  |
| rbc_mchc_mean_8_365 | VARCHAR | missing |  |
| rbc_mchc_var_8_365 | VARCHAR | missing |  |
| count_rbc_mchc_8_365 | REAL | 0.0 |  |
| serum_albumin_min_0_7 | VARCHAR | missing |  |
| serum_albumin_max_0_7 | VARCHAR | missing |  |
| serum_albumin_mean_0_7 | VARCHAR | missing |  |
| serum_albumin_var_0_7 | VARCHAR | missing |  |
| count_serum_albumin_0_7 | REAL | 0.0 |  |
| serum_albumin_min_8_365 | VARCHAR | missing |  |
| serum_albumin_max_8_365 | VARCHAR | missing |  |
| serum_albumin_mean_8_365 | VARCHAR | missing |  |
| serum_albumin_var_8_365 | VARCHAR | missing |  |
| count_serum_albumin_8_365 | REAL | 0.0 |  |
| serum_bilirubin_min_0_7 | VARCHAR | missing |  |
| serum_bilirubin_max_0_7 | VARCHAR | missing |  |
| serum_bilirubin_mean_0_7 | VARCHAR | missing |  |
| serum_bilirubin_var_0_7 | VARCHAR | missing |  |
| count_serum_bilirubin_0_7 | REAL | 0.0 |  |
| serum_bilirubin_min_8_365 | VARCHAR | missing |  |
| serum_bilirubin_max_8_365 | VARCHAR | missing |  |
| serum_bilirubin_mean_8_365 | VARCHAR | missing |  |
| serum_bilirubin_var_8_365 | VARCHAR | missing |  |
| count_serum_bilirubin_8_365 | REAL | 0.0 |  |
| serum_tropt_min_0_7 | VARCHAR | missing |  |
| serum_tropt_max_0_7 | VARCHAR | missing |  |
| serum_tropt_mean_0_7 | VARCHAR | missing |  |
| serum_tropt_var_0_7 | VARCHAR | missing |  |
| count_serum_tropt_0_7 | REAL | 0.0 |  |
| serum_tropt_min_8_365 | VARCHAR | missing |  |
| serum_tropt_max_8_365 | VARCHAR | missing |  |
| serum_tropt_mean_8_365 | VARCHAR | missing |  |
| serum_tropt_var_8_365 | VARCHAR | missing |  |
| count_serum_tropt_8_365 | REAL | 0.0 |  |
| serum_inr_min_0_7 | VARCHAR | missing |  |
| serum_inr_max_0_7 | VARCHAR | missing |  |
| serum_inr_mean_0_7 | VARCHAR | missing |  |
| serum_inr_var_0_7 | VARCHAR | missing |  |
| count_serum_inr_0_7 | REAL | 0.0 |  |
| serum_inr_min_8_365 | VARCHAR | missing |  |
| serum_inr_max_8_365 | VARCHAR | missing |  |
| serum_inr_mean_8_365 | VARCHAR | missing |  |
| serum_inr_var_8_365 | VARCHAR | missing |  |
| count_serum_inr_8_365 | REAL | 0.0 |  |
| serum_esr_min_0_7 | VARCHAR | missing |  |
| serum_esr_max_0_7 | VARCHAR | missing |  |
| serum_esr_mean_0_7 | VARCHAR | missing |  |
| serum_esr_var_0_7 | VARCHAR | missing |  |
| count_serum_esr_0_7 | REAL | 0.0 |  |
| serum_esr_min_8_365 | VARCHAR | missing |  |
| serum_esr_max_8_365 | VARCHAR | missing |  |
| serum_esr_mean_8_365 | VARCHAR | missing |  |
| serum_esr_var_8_365 | VARCHAR | missing |  |
| count_serum_esr_8_365 | REAL | 0.0 |  |
| serum_lactate_min_0_7 | VARCHAR | missing |  |
| serum_lactate_max_0_7 | VARCHAR | missing |  |
| serum_lactate_mean_0_7 | VARCHAR | missing |  |
| serum_lactate_var_0_7 | VARCHAR | missing |  |
| count_serum_lactate_0_7 | REAL | 0.0 |  |
| serum_lactate_min_8_365 | VARCHAR | missing |  |
| serum_lactate_max_8_365 | VARCHAR | missing |  |
| serum_lactate_mean_8_365 | VARCHAR | missing |  |
| serum_lactate_var_8_365 | VARCHAR | missing |  |
| count_serum_lactate_8_365 | REAL | 0.0 |  |
| serum_crp_min_0_7 | VARCHAR | missing |  |
| serum_crp_max_0_7 | VARCHAR | missing |  |
| serum_crp_mean_0_7 | VARCHAR | missing |  |
| serum_crp_var_0_7 | VARCHAR | missing |  |
| count_serum_crp_0_7 | REAL | 0.0 |  |
| serum_crp_min_8_365 | VARCHAR | missing |  |
| serum_crp_max_8_365 | VARCHAR | missing |  |
| serum_crp_mean_8_365 | VARCHAR | missing |  |
| serum_crp_var_8_365 | VARCHAR | missing |  |
| count_serum_crp_8_365 | REAL | 0.0 |  |
| serum_tropi_min_0_7 | VARCHAR | missing |  |
| serum_tropi_max_0_7 | VARCHAR | missing |  |
| serum_tropi_mean_0_7 | VARCHAR | missing |  |
| serum_tropi_var_0_7 | VARCHAR | missing |  |
| count_serum_tropi_0_7 | REAL | 0.0 |  |
| serum_tropi_min_8_365 | VARCHAR | missing |  |
| serum_tropi_max_8_365 | VARCHAR | missing |  |
| serum_tropi_mean_8_365 | VARCHAR | missing |  |
| serum_tropi_var_8_365 | VARCHAR | missing |  |
| count_serum_tropi_8_365 | REAL | 0.0 |  |
| reference creatinine | VARCHAR | missing |  |
| ckd | VARCHAR | No CKD |  |
| egfr | VARCHAR | not available |  |

### Table: 58_merged_enc_id_outcome_final_0_0.csv

| Field | Type | Most freq. value | Comment |
| --- | --- | --- | --- |
| patient_deiden_id | VARCHAR | IDEALIST_2021-05-01_1001 |  |
| merged_enc_id | VARCHAR | IDEALIST_2021-05-01_10599_m_1 |  |
| admit_datetime | VARCHAR | 2012-12-01 00:01:00 |  |
| dischg_datetime | VARCHAR | 2013-01-31 23:59:00 |  |
| dischg_disposition | VARCHAR | TO HOME |  |
| sched_location | VARCHAR |  |  |
| sched_room | VARCHAR |  |  |
| cpt_1 | VARCHAR |  |  |
| cpt_1_description | VARCHAR |  |  |
| or_case_num | VARCHAR |  |  |
| sched_surgeon_dr_deiden_id | INT |  |  |
| main_surgeon_dr_deiden_id | REAL |  |  |
| main_anesthesiologist_dr_deiden_id | REAL |  |  |
| enter_datetime | VARCHAR |  |  |
| exit_datetime | VARCHAR |  |  |
| surgery_order | REAL |  |  |
| clean_death_date | DATE |  |  |
| icu_surgery_2d | REAL |  |  |
| icu_surgery_3d | REAL |  |  |
| icu_surgery_7d | REAL |  |  |
| icu_surgery_30d | REAL |  |  |
| icu_surgery_disch | REAL |  |  |
| icu_surgery_2d_cal | REAL |  |  |
| icu_free_surgery_2d_cal | REAL |  |  |
| icu_surgery_3d_cal | REAL |  |  |
| icu_free_surgery_3d_cal | REAL |  |  |
| icu_surgery_7d_cal | REAL |  |  |
| icu_free_surgery_7d_cal | REAL |  |  |
| icu_surgery_30d_cal | REAL |  |  |
| icu_free_surgery_30d_cal | REAL |  |  |
| icu_surgery_disch_cal | REAL |  |  |
| icu_free_surgery_disch_cal | REAL |  |  |
| icu_surgery_disch_gt_48h | REAL |  |  |
| icu_surgery_disch_gt_2d | REAL |  |  |
| cal_days_to_surgery_icu | REAL |  |  |
| days_to_surgery_icu | REAL |  |  |
| dead_or_icu_surgery_30d_cal | REAL |  |  |
| alive_icu_free_surgery_30d_cal | REAL |  |  |
| icu_adm_2d | REAL | 0.0 |  |
| icu_adm_3d | REAL | 0.0 |  |
| icu_adm_7d | REAL | 0.0 |  |
| icu_adm_30d | REAL | 0.0 |  |
| icu_adm_disch | REAL | 0.0 |  |
| icu_adm_2d_cal | REAL | 0.0 |  |
| icu_free_adm_2d_cal | REAL | 2.0 |  |
| icu_adm_3d_cal | REAL | 0.0 |  |
| icu_free_adm_3d_cal | REAL | 3.0 |  |
| icu_adm_7d_cal | REAL | 0.0 |  |
| icu_free_adm_7d_cal | REAL | 7.0 |  |
| icu_adm_30d_cal | REAL | 0.0 |  |
| icu_free_adm_30d_cal | REAL | 30.0 |  |
| icu_adm_disch_cal | REAL | 0.0 |  |
| icu_free_adm_disch_cal | REAL | 1.0 |  |
| icu_adm_disch_gt_48h | REAL | 0.0 |  |
| icu_adm_disch_gt_2d | REAL | 0.0 |  |
| cal_days_to_adm_icu | REAL |  |  |
| days_to_adm_icu | REAL |  |  |
| dead_or_icu_adm_30d_cal | REAL | 0.0 |  |
| alive_icu_free_adm_30d_cal | REAL | 30.0 |  |
| cv_cardiac_arrest_surgery_disch | INT |  |  |
| icd_codes_cv_cardiac_arrest_surgery_disch | VARCHAR |  |  |
| cv_cardiac_arrest_admit_disch | INT |  |  |
| icd_codes_cv_cardiac_arrest_admit_disch | VARCHAR |  |  |
| cv_hypo_no_shock_surgery_disch | INT |  |  |
| icd_codes_cv_hypo_no_shock_surgery_disch | VARCHAR |  |  |
| cv_hypo_no_shock_admit_disch | INT |  |  |
| icd_codes_cv_hypo_no_shock_admit_disch | VARCHAR |  |  |
| cv_hf_surgery_disch | INT |  |  |
| icd_codes_cv_hf_surgery_disch | VARCHAR |  |  |
| cv_hf_admit_disch | INT |  |  |
| icd_codes_cv_hf_admit_disch | VARCHAR |  |  |
| cv_shock_surgery_disch | INT |  |  |
| icd_codes_cv_shock_surgery_disch | VARCHAR |  |  |
| cv_shock_admit_disch | INT |  |  |
| icd_codes_cv_shock_admit_disch | VARCHAR |  |  |
| delirium_icd_surgery_disch | INT |  |  |
| icd_codes_delirium_icd_surgery_disch | VARCHAR |  |  |
| delirium_icd_admit_disch | INT |  |  |
| icd_codes_delirium_icd_admit_disch | VARCHAR |  |  |
| mech_wound_surgery_disch | INT |  |  |
| icd_codes_mech_wound_surgery_disch | VARCHAR |  |  |
| mech_wound_admit_disch | INT |  |  |
| icd_codes_mech_wound_admit_disch | VARCHAR |  |  |
| neuro_other_surgery_disch | INT |  |  |
| icd_codes_neuro_other_surgery_disch | VARCHAR |  |  |
| neuro_other_admit_disch | INT |  |  |
| icd_codes_neuro_other_admit_disch | VARCHAR |  |  |
| neuro_plegia_paralytic_surgery_disch | INT |  |  |
| icd_codes_neuro_plegia_paralytic_surgery_disch | VARCHAR |  |  |
| neuro_plegia_paralytic_admit_disch | INT |  |  |
| icd_codes_neuro_plegia_paralytic_admit_disch | VARCHAR |  |  |
| neuro_stroke_surgery_disch | INT |  |  |
| icd_codes_neuro_stroke_surgery_disch | VARCHAR |  |  |
| neuro_stroke_admit_disch | INT |  |  |
| icd_codes_neuro_stroke_admit_disch | VARCHAR |  |  |
| surg_infection_surgery_disch | INT |  |  |
| icd_codes_surg_infection_surgery_disch | VARCHAR |  |  |
| surg_infection_admit_disch | INT |  |  |
| icd_codes_surg_infection_admit_disch | VARCHAR |  |  |
| proc_graft_implant_foreign_body_surgery_disch | INT |  |  |
| icd_codes_proc_graft_implant_foreign_body_surgery_disch | VARCHAR |  |  |
| proc_graft_implant_foreign_body_admit_disch | INT |  |  |
| icd_codes_proc_graft_implant_foreign_body_admit_disch | VARCHAR |  |  |
| proc_hemorrhage_hematoma_seroma_surgery_disch | INT |  |  |
| icd_codes_proc_hemorrhage_hematoma_seroma_surgery_disch | VARCHAR |  |  |
| proc_hemorrhage_hematoma_seroma_admit_disch | INT |  |  |
| icd_codes_proc_hemorrhage_hematoma_seroma_admit_disch | VARCHAR |  |  |
| proc_non_hemorrhagic_technical_surgery_disch | INT |  |  |
| icd_codes_proc_non_hemorrhagic_technical_surgery_disch | VARCHAR |  |  |
| proc_non_hemorrhagic_technical_admit_disch | INT |  |  |
| icd_codes_proc_non_hemorrhagic_technical_admit_disch | VARCHAR |  |  |
| sepsis_surgery_disch | INT |  |  |
| icd_codes_sepsis_surgery_disch | VARCHAR |  |  |
| sepsis_admit_disch | INT |  |  |
| icd_codes_sepsis_admit_disch | VARCHAR |  |  |
| vte_pe_surgery_disch | INT |  |  |
| icd_codes_vte_pe_surgery_disch | VARCHAR |  |  |
| vte_pe_admit_disch | INT |  |  |
| icd_codes_vte_pe_admit_disch | VARCHAR |  |  |
| vte_deep_super_vein_surgery_disch | INT |  |  |
| icd_codes_vte_deep_super_vein_surgery_disch | VARCHAR |  |  |
| vte_deep_super_vein_admit_disch | INT |  |  |
| icd_codes_vte_deep_super_vein_admit_disch | VARCHAR |  |  |
| cv_surgery_disch | INT |  |  |
| icd_codes_cv_surgery_disch | VARCHAR |  |  |
| cv_admit_disch | INT |  |  |
| icd_codes_cv_admit_disch | VARCHAR |  |  |
| neuro_surgery_disch | INT |  |  |
| icd_codes_neuro_surgery_disch | VARCHAR |  |  |
| neuro_admit_disch | INT |  |  |
| icd_codes_neuro_admit_disch | VARCHAR |  |  |
| proc_surgery_disch | INT |  |  |
| icd_codes_proc_surgery_disch | VARCHAR |  |  |
| proc_admit_disch | INT |  |  |
| icd_codes_proc_admit_disch | VARCHAR |  |  |
| vte_surgery_disch | INT |  |  |
| icd_codes_vte_surgery_disch | VARCHAR |  |  |
| vte_admit_disch | INT |  |  |
| icd_codes_vte_admit_disch | VARCHAR |  |  |
| mv_surgery_2d | REAL |  |  |
| mv_surgery_3d | REAL |  |  |
| mv_surgery_7d | REAL |  |  |
| mv_surgery_30d | REAL |  |  |
| mv_surgery_disch | REAL |  |  |
| mv_surgery_2d_cal | REAL |  |  |
| mv_free_surgery_2d_cal | REAL |  |  |
| mv_surgery_3d_cal | REAL |  |  |
| mv_free_surgery_3d_cal | REAL |  |  |
| mv_surgery_7d_cal | REAL |  |  |
| mv_free_surgery_7d_cal | REAL |  |  |
| mv_surgery_30d_cal | REAL |  |  |
| mv_free_surgery_30d_cal | REAL |  |  |
| mv_surgery_disch_cal | REAL |  |  |
| mv_free_surgery_disch_cal | REAL |  |  |
| mv_surgery_disch_gt_48h | REAL |  |  |
| mv_surgery_disch_gt_2d | REAL |  |  |
| cal_days_to_surgery_mv | REAL |  |  |
| days_to_surgery_mv | REAL |  |  |
| mv_adm_2d | REAL | 0.0 |  |
| mv_adm_3d | REAL | 0.0 |  |
| mv_adm_7d | REAL | 0.0 |  |
| mv_adm_30d | REAL | 0.0 |  |
| mv_adm_disch | REAL | 0.0 |  |
| mv_adm_2d_cal | REAL | 0.0 |  |
| mv_free_adm_2d_cal | REAL | 2.0 |  |
| mv_adm_3d_cal | REAL | 0.0 |  |
| mv_free_adm_3d_cal | REAL | 3.0 |  |
| mv_adm_7d_cal | REAL | 0.0 |  |
| mv_free_adm_7d_cal | REAL | 7.0 |  |
| mv_adm_30d_cal | REAL | 0.0 |  |
| mv_free_adm_30d_cal | REAL | 30.0 |  |
| mv_adm_disch_cal | REAL | 0.0 |  |
| mv_free_adm_disch_cal | REAL | 1.0 |  |
| mv_adm_disch_gt_48h | REAL | 0.0 |  |
| mv_adm_disch_gt_2d | REAL | 0.0 |  |
| cal_days_to_adm_mv | REAL |  |  |
| days_to_adm_mv | REAL |  |  |
| dead_or_mv_surgery_30d_cal | REAL |  |  |
| alive_mv_free_surgery_30d_cal | REAL |  |  |
| dead_or_mv_adm_30d_cal | REAL | 0.0 |  |
| alive_mv_free_adm_30d_cal | REAL | 30.0 |  |
| aki_surgery_3d_with_race_correction | VARCHAR |  |  |
| aki_surgery_3d_cal_with_race_correction | VARCHAR |  |  |
| aki_surgery_7d_with_race_correction | VARCHAR |  |  |
| aki_surgery_7d_cal_with_race_correction | VARCHAR |  |  |
| aki_admit_3d_with_race_correction | VARCHAR |  |  |
| aki_admit_3d_cal_with_race_correction | VARCHAR |  |  |
| aki_admit_7d_with_race_correction | VARCHAR |  |  |
| aki_admit_7d_cal_with_race_correction | VARCHAR |  |  |
| aki_adm_disch_with_race_correction | VARCHAR | 0.0 |  |
| aki_surgery_disch_with_race_correction | VARCHAR |  |  |
| overall_aki_with_race_correction_type | VARCHAR |  |  |
| aki_with_race_correction_recovery | VARCHAR |  |  |
| paki_with_race_correction | VARCHAR |  |  |
| max_aki_with_race_correction_stage | VARCHAR |  |  |
| discharge_aki_with_race_correction_status | VARCHAR |  |  |
| aki_surgery_3d_without_race_correction | VARCHAR |  |  |
| aki_surgery_3d_cal_without_race_correction | VARCHAR |  |  |
| aki_surgery_7d_without_race_correction | VARCHAR |  |  |
| aki_surgery_7d_cal_without_race_correction | VARCHAR |  |  |
| aki_admit_3d_without_race_correction | VARCHAR |  |  |
| aki_admit_3d_cal_without_race_correction | VARCHAR |  |  |
| aki_admit_7d_without_race_correction | VARCHAR |  |  |
| aki_admit_7d_cal_without_race_correction | VARCHAR |  |  |
| aki_adm_disch_without_race_correction | VARCHAR | 0.0 |  |
| aki_surgery_disch_without_race_correction | VARCHAR |  |  |
| overall_aki_without_race_correction_type | VARCHAR |  |  |
| aki_without_race_correction_recovery | VARCHAR |  |  |
| paki_without_race_correction | VARCHAR |  |  |
| max_aki_without_race_correction_stage | VARCHAR |  |  |
| discharge_aki_without_race_correction_status | VARCHAR |  |  |
| final_class_with_race_correction | VARCHAR | No CKD by Medical History Or Creatinine Criteria |  |
| final_class_without_race_correction | VARCHAR | No CKD by Medical History Or Creatinine Criteria |  |
| hospital_mortality | INT | 0 |  |
| surgery_death_3d | REAL |  |  |
| surgery_death_3d_cal | REAL |  |  |
| surgery_death_7d | REAL |  |  |
| surgery_death_7d_cal | REAL |  |  |
| delirium_cam_surgery_1d | REAL |  |  |
| delirium_cam_surgery_1d_cal | REAL |  |  |
| delirium_cam_surgery_3d | REAL |  |  |
| delirium_cam_surgery_3d_cal | REAL |  |  |
| delirium_cam_surgery_7d | REAL |  |  |
| delirium_cam_surgery_7d_cal | REAL |  |  |
| delirium_cam_surgery_disch | REAL |  |  |
| delirium_cam_surgery_disch_cal | REAL |  |  |
| delirium_cam_adm_1d | REAL | 0.0 |  |
| delirium_cam_adm_1d_cal | REAL | 0.0 |  |
| delirium_cam_adm_3d | REAL | 0.0 |  |
| delirium_cam_adm_3d_cal | REAL | 0.0 |  |
| delirium_cam_adm_7d | REAL | 0.0 |  |
| delirium_cam_adm_7d_cal | REAL | 0.0 |  |
| delirium_cam_adm_disch | REAL | 0.0 |  |
| delirium_cam_adm_disch_cal | REAL | 0.0 |  |
| delirium_icd_cam_comb_surgery_disch | REAL |  |  |
| delirium_icd_cam_comb_adm_disch | INT | 0 |  |
| neuro_delirium_cam_icd_comb_surgery_disch | REAL |  |  |
| neuro_delirium_cam_icd_comb_adm_disch | INT | 0 |  |
| neuro_delirium_cam_comb_surgery_disch | REAL |  |  |
| neuro_delirium_cam_comb_adm_disch | INT | 0 |  |
| procedural_comp_infection_mech_wound_comb_surgery_disch | REAL |  |  |
| infection_mech_wound_comb_surgery_disch | REAL |  |  |

