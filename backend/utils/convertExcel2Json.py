import pandas as pd
import json
import os



Categories_Table = {
    'Administrative Data': 'Data releated to administative mangement of the datasets',
    'Demographic Info': "Patient's demographic information",
    'Health Economics Data' : 'Economics related tables such as Bills',
    'Health System Data': "Data related to health eco-systems such as providers and stations",
    'Medical History' : 'Restrospective medical history data',
    'Outcomes Data': 'In-house generated outcomes data for future analysis.'
}

Categories_Table_OMOP = {
    'CDM': 'OMOP standardized clinical data model',
    'IC3_CUSTOMIZED': 'IC3 customized tables',
    'RESULTS': 'IC3 customized cohort ',
    'VOCAB': 'OMOP standardized vocabularies'
}


def parserIndicators(row):
    results = ""
    if(row['PRIMARY_KEY'] == 'YES'):
        results += 'PRI KEY'
    if('IS_NULLABLE' in row and row['IS_NULLABLE'] == 'YES'):
        results += ";" if results != "" else ""
        results += "NULLABLE"

    return results


def convert(folderPath:str , isOMOP:bool = False):

    _databaseName = os.path.basename(folderPath)

    _table = pd.read_excel(f'{folderPath}\TableInfo.xlsx')
    _table = _table.applymap(str)

    # ### parser all table information
    _columns = pd.read_excel(f'{folderPath}\ColumnInfo.xlsx')
    _columns = _columns.applymap(str)
    _columns.fillna('')
    _columns.rename(columns={'COLUMN_NAME':'Column_name','COLUMN_TYPE':'Column_Type', 'COLUMN_DESCRIPTION':'Description'}, inplace=True)
    _columns['Indicators'] = _columns.apply(lambda x : parserIndicators(x), axis= 1)
    _columns['Required'] = 'Yes' if 'isRequired' not in _columns.columns else _columns['isRequired']


    categories = {}

    ### parser all categories information
    for index, row in _table.iterrows():

        _category = row['Table Category']
        _tempDict = {
            'Table_name': row['Table Name'],
            'Description': row['Table Description'],
            "Tags": row['Tags'].split(';') if row['Tags'] != '' else '' 
        }

        _columnTable = _columns.loc[_columns['TABLE_NAME'] == row['Table Name']][['Column_name','Column_Type','Description','Indicators','Required']]
        _columnTableLists = _columnTable.to_dict('records')

        for item in _columnTableLists:
            item['Data'] = []
            item['Indicators'] = item['Indicators'].split(";") if item['Indicators'] != "" else []
        
        ## Add columns to table
        _tempDict['Columns'] = _columnTableLists

        _tempArray = []
        if _category in categories:
            _tempArray = categories[_category]
        
        _tempArray.append(_tempDict)
        categories[_category] =  _tempArray

    allInfo = []

    CategoriesTables = Categories_Table if not isOMOP else Categories_Table_OMOP

    for k,v in CategoriesTables.items():

        if(k in categories):
            _tempDict = {
                "Category_name" : k,
                "Columns" : categories[k]
            }
        allInfo.append(_tempDict)

    with open(f'./meta_{_databaseName}.json', 'w+') as f:
        json.dump(allInfo, f)



convert('./APARI', isOMOP=True)